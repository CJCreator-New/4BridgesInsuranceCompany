# website_auditor.py
# A comprehensive web compliance auditor for U.S. insurance websites using Selenium and BeautifulSoup.
# This script audits a given website against a 2025 checklist, crawling pages, checking elements, and generating an HTML report with screenshots.

import sys
import os
import time
import csv
from urllib.parse import urljoin, urlparse
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from bs4 import BeautifulSoup
import pandas as pd
from PIL import Image
import io
import base64

# Requirements: pip install selenium beautifulsoup4 pandas pillow reportlab
# Also, download ChromeDriver matching your Chrome version and place in PATH.

class WebsiteAuditor:
    def __init__(self, base_url):
        self.base_url = base_url
        self.driver = None
        self.results = []
        self.screenshots = {}
        self.visited_urls = set()
        self.max_depth = 3  # Crawl depth for internal links

    def setup_driver(self):
        """Initialize Selenium WebDriver with headless Chrome for automation."""
        try:
            options = Options()
            options.add_argument("--headless")
            options.add_argument("--no-sandbox")
            options.add_argument("--disable-dev-shm-usage")
            options.add_argument("--window-size=1920,1080")
            self.driver = webdriver.Chrome(options=options)
        except Exception as e:
            raise RuntimeError(f"Failed to initialize Chrome WebDriver: {e}. Ensure ChromeDriver is installed and in PATH.")

    def teardown_driver(self):
        """Close the WebDriver."""
        if self.driver:
            self.driver.quit()

    def take_screenshot(self, name):
        """Capture a screenshot and store as base64 for embedding in HTML report."""
        if self.driver:
            screenshot = self.driver.get_screenshot_as_png()
            img = Image.open(io.BytesIO(screenshot))
            buffered = io.BytesIO()
            img.save(buffered, format="PNG")
            img_str = base64.b64encode(buffered.getvalue()).decode()
            self.screenshots[name] = img_str
            return img_str
        return None

    def crawl_site(self, url, depth=0):
        """Recursively crawl the site up to max_depth, collecting page data."""
        if depth > self.max_depth or url in self.visited_urls:
            return
        self.visited_urls.add(url)
        try:
            self.driver.get(url)
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            soup = BeautifulSoup(self.driver.page_source, 'html.parser')
            # Perform checks on this page
            self.run_checks(url, soup)
            # Follow internal links
            for link in soup.find_all('a', href=True):
                href = urljoin(url, link['href'])
                if urlparse(href).netloc == urlparse(self.base_url).netloc:
                    self.crawl_site(href, depth + 1)
        except (TimeoutException, NoSuchElementException) as e:
            print(f"Error crawling {url}: {e}")
        except Exception as e:
            print(f"Unexpected error crawling {url}: {e}")

    def run_checks(self, url, soup):
        """Run all checklist checks on the current page."""
        checks = [
            self.check_branding_trust,
            self.check_design_ux,
            self.check_content_seo,
            self.check_lead_generation,
            self.check_security_compliance
        ]
        for check_func in checks:
            result = check_func(url, soup)
            self.results.extend(result)

    def check_branding_trust(self, url, soup):
        """Check Branding and Trust Signals."""
        results = []
        # 1. Domain/Logo
        title = soup.find('title')
        favicon = soup.find('link', rel='icon')
        status = 'Pass' if title and favicon else 'Fail'
        results.append({
            'Category': 'Branding and Trust Signals',
            'Check': 'Domain/Logo Detection',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Title: {title.text if title else 'Missing'} | Favicon: {'Present' if favicon else 'Missing'}",
            'Recommendation': 'Add a clear title and favicon if missing.'
        })
        # 2. Staff Bios
        bios = soup.find_all(['div', 'section'], string=lambda text: text and ('bio' in text.lower() or 'team' in text.lower()))
        status = 'Pass' if bios else 'Fail'
        results.append({
            'Category': 'Branding and Trust Signals',
            'Check': 'Staff Bios',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(bios)} bio sections.",
            'Recommendation': 'Add staff bio pages with images and credentials.'
        })
        # 3. Testimonials
        testimonials = soup.find_all(['div', 'blockquote'], string=lambda text: text and ('review' in text.lower() or 'testimonial' in text.lower()))
        status = 'Pass' if testimonials else 'Fail'
        results.append({
            'Category': 'Branding and Trust Signals',
            'Check': 'Testimonials',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(testimonials)} testimonial elements.",
            'Recommendation': 'Integrate review widgets like Trustpilot.'
        })
        # 4. Badges/Licenses
        badges = soup.find_all(['img', 'a'], string=lambda text: text and ('AM Best' in str(text) or 'DOI' in str(text)))
        status = 'Pass' if badges else 'Fail'
        results.append({
            'Category': 'Branding and Trust Signals',
            'Check': 'Badges/Licenses',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(badges)} badge elements.",
            'Recommendation': 'Display insurance licenses and ratings prominently.'
        })
        # 5. Local Presence
        local_keywords = ['local', 'community', 'area', 'near you']
        content = soup.get_text().lower()
        status = 'Pass' if any(kw in content for kw in local_keywords) else 'Fail'
        results.append({
            'Category': 'Branding and Trust Signals',
            'Check': 'Local Presence',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Local keywords detected: {', '.join([kw for kw in local_keywords if kw in content])}",
            'Recommendation': 'Add location-specific content and maps.'
        })
        return results

    def check_design_ux(self, url, soup):
        """Check Design and User Experience."""
        results = []
        # 1. Mobile Responsiveness
        self.driver.set_window_size(375, 667)  # Mobile viewport
        time.sleep(1)
        mobile_screenshot = self.take_screenshot(f"mobile_{url.replace('/', '_')}")
        self.driver.set_window_size(1920, 1080)  # Back to desktop
        # Heuristic: Check if layout elements are present (basic check)
        status = 'Pass' if soup.find('meta', {'name': 'viewport'}) else 'Fail'
        results.append({
            'Category': 'Design and User Experience',
            'Check': 'Mobile Responsiveness',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': 'Viewport meta tag checked.',
            'Recommendation': 'Add <meta name="viewport" content="width=device-width, initial-scale=1">.'
        })
        # 2. Navigation
        nav_links = soup.find_all('a', href=True)
        working_links = 0
        for link in nav_links[:5]:  # Check first 5
            try:
                self.driver.get(urljoin(url, link['href']))
                if self.driver.current_url.startswith('http'):
                    working_links += 1
            except (TimeoutException, Exception):
                continue
        status = 'Pass' if working_links >= 3 else 'Fail'
        results.append({
            'Category': 'Design and User Experience',
            'Check': 'Navigation',
            'Status': status,
            'Score': (working_links / 5) * 100,
            'Notes': f"{working_links}/5 links working.",
            'Recommendation': 'Fix broken navigation links.'
        })
        # 3. Layout and Load Time
        load_time = self.driver.execute_script("return performance.timing.loadEventEnd - performance.timing.navigationStart;")
        status = 'Pass' if load_time < 3000 else 'Fail'
        results.append({
            'Category': 'Design and User Experience',
            'Check': 'Load Time',
            'Status': status,
            'Score': max(0, 100 - (load_time / 30)),
            'Notes': f"Load time: {load_time}ms.",
            'Recommendation': 'Optimize images and scripts for faster loading.'
        })
        # 4. Videos
        videos = soup.find_all('video')
        status = 'Pass' if videos else 'Fail'  # Presence check; captions would need deeper inspection
        results.append({
            'Category': 'Design and User Experience',
            'Check': 'Videos',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(videos)} video elements.",
            'Recommendation': 'Add captions to videos for accessibility.'
        })
        # 5. Accessibility (Basic WCAG)
        images = soup.find_all('img')
        alt_missing = sum(1 for img in images if not img.get('alt'))
        status = 'Pass' if alt_missing == 0 else 'Fail'
        results.append({
            'Category': 'Design and User Experience',
            'Check': 'Accessibility',
            'Status': status,
            'Score': max(0, 100 - (alt_missing * 10)),
            'Notes': f"{alt_missing} images missing alt text.",
            'Recommendation': 'Add descriptive alt text to all images.'
        })
        return results

    def check_content_seo(self, url, soup):
        """Check Content and SEO."""
        results = []
        # 1. Product Pages
        product_paths = ['/auto', '/home', '/life']
        has_products = any(path in url for path in product_paths)
        status = 'Pass' if has_products else 'Fail'
        results.append({
            'Category': 'Content and SEO',
            'Check': 'Product Pages',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Product paths detected: {[p for p in product_paths if p in url]}",
            'Recommendation': 'Create dedicated product pages with quotes and resources.'
        })
        # 2. Blog
        blog_posts = soup.find_all(['article', 'div'], class_=lambda c: c and 'post' in c.lower())
        status = 'Pass' if blog_posts else 'Fail'
        results.append({
            'Category': 'Content and SEO',
            'Check': 'Blog',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(blog_posts)} blog posts.",
            'Recommendation': 'Add a blog with recent, keyword-rich articles.'
        })
        # 3. Resources
        faq = soup.find_all(['section', 'div'], string=lambda text: text and 'faq' in text.lower())
        glossary = soup.find_all(['section', 'div'], string=lambda text: text and 'glossary' in text.lower())
        status = 'Pass' if faq or glossary else 'Fail'
        results.append({
            'Category': 'Content and SEO',
            'Check': 'Resources',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"FAQ: {len(faq)}, Glossary: {len(glossary)}",
            'Recommendation': 'Add FAQ and glossary sections for user education.'
        })
        return results

    def check_lead_generation(self, url, soup):
        """Check Lead Generation and Tools."""
        results = []
        # 1. Quote Forms
        forms = soup.find_all('form')
        quote_forms = [f for f in forms if 'quote' in str(f).lower()]
        status = 'Pass' if quote_forms else 'Fail'
        results.append({
            'Category': 'Lead Generation and Tools',
            'Check': 'Quote Forms',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(quote_forms)} quote forms.",
            'Recommendation': 'Add simple quote forms with fewer than 5 fields.'
        })
        # 2. CTAs
        ctas = soup.find_all(['button', 'a'], string=lambda text: text and 'get quote' in text.lower())
        status = 'Pass' if ctas else 'Fail'
        results.append({
            'Category': 'Lead Generation and Tools',
            'Check': 'CTAs',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(ctas)} CTA elements.",
            'Recommendation': 'Add prominent "Get Quote" buttons.'
        })
        # 3. Live Chat
        chat_scripts = soup.find_all('script', src=lambda src: src and ('intercom' in src or 'chat' in src))
        status = 'Pass' if chat_scripts else 'Fail'
        results.append({
            'Category': 'Lead Generation and Tools',
            'Check': 'Live Chat',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(chat_scripts)} chat scripts.",
            'Recommendation': 'Integrate a live chat widget.'
        })
        # 4. Client Portal
        portal_links = soup.find_all('a', href=lambda href: href and ('login' in href or 'dashboard' in href))
        status = 'Pass' if portal_links else 'Fail'
        results.append({
            'Category': 'Lead Generation and Tools',
            'Check': 'Client Portal',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(portal_links)} portal links.",
            'Recommendation': 'Add a secure client login portal.'
        })
        return results

    def check_security_compliance(self, url, soup):
        """Check Security and Compliance."""
        results = []
        # 1. HTTPS
        status = 'Pass' if url.startswith('https') else 'Fail'
        results.append({
            'Category': 'Security and Compliance',
            'Check': 'HTTPS',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Protocol: {'HTTPS' if status == 'Pass' else 'HTTP'}",
            'Recommendation': 'Enable HTTPS with an SSL certificate.'
        })
        # 2. Privacy Policy
        privacy = soup.find_all(['a', 'section'], string=lambda text: text and 'privacy' in text.lower())
        status = 'Pass' if privacy else 'Fail'
        results.append({
            'Category': 'Security and Compliance',
            'Check': 'Privacy Policy',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(privacy)} privacy elements.",
            'Recommendation': 'Add a GLBA-compliant privacy policy.'
        })
        # 3. Cookies
        cookie_banners = soup.find_all(['div', 'section'], class_=lambda c: c and 'cookie' in c.lower())
        status = 'Pass' if cookie_banners else 'Fail'
        results.append({
            'Category': 'Security and Compliance',
            'Check': 'Cookies',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(cookie_banners)} cookie banners.",
            'Recommendation': 'Add a cookie consent banner.'
        })
        # 4. Safeguards
        encryption_indicators = soup.find_all(['img', 'text'], string=lambda text: text and ('ssl' in str(text).lower() or 'secure' in str(text).lower()))
        status = 'Pass' if encryption_indicators else 'Fail'
        results.append({
            'Category': 'Security and Compliance',
            'Check': 'Safeguards',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(encryption_indicators)} security indicators.",
            'Recommendation': 'Display SSL badges and security assurances.'
        })
        # 5. Advertising
        disclaimers = soup.find_all(['p', 'div'], string=lambda text: text and 'disclaimer' in text.lower())
        status = 'Pass' if disclaimers else 'Fail'
        results.append({
            'Category': 'Security and Compliance',
            'Check': 'Advertising',
            'Status': status,
            'Score': 100 if status == 'Pass' else 0,
            'Notes': f"Found {len(disclaimers)} disclaimers.",
            'Recommendation': 'Add clear advertising disclaimers.'
        })
        return results

    def generate_report(self):
        """Generate HTML report and CSV export."""
        df = pd.DataFrame(self.results)
        # HTML Report
        html = f"""
        <html>
        <head><title>Website Audit Report</title></head>
        <body>
        <h1>Insurance Website Audit Report</h1>
        <p>Base URL: {self.base_url}</p>
        <table border="1">
        <tr><th>Category</th><th>Check</th><th>Status</th><th>Score</th><th>Notes</th><th>Recommendation</th></tr>
        {"".join(f"<tr><td>{row['Category']}</td><td>{row['Check']}</td><td>{row['Status']}</td><td>{row['Score']}%</td><td>{row['Notes']}</td><td>{row['Recommendation']}</td></tr>" for _, row in df.iterrows())}
        </table>
        <h2>Screenshots</h2>
        {"".join(f"<h3>{name}</h3><img src='data:image/png;base64,{img}' width='400'/>" for name, img in self.screenshots.items())}
        </body>
        </html>
        """
        with open('audit_report.html', 'w') as f:
            f.write(html)
        # CSV Export
        df.to_csv('audit_report.csv', index=False)
        print("Report generated: audit_report.html and audit_report.csv")

    def audit(self):
        """Main audit function."""
        self.setup_driver()
        try:
            self.crawl_site(self.base_url)
            self.generate_report()
        except Exception as e:
            print(f"Audit failed: {e}")
            raise
        finally:
            self.teardown_driver()

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python website_auditor.py <url>")
        sys.exit(1)
    auditor = WebsiteAuditor(sys.argv[1])
    auditor.audit()