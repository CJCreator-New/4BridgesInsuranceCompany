#!/usr/bin/env python3
import sys
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import pandas as pd
from datetime import datetime

class BridgesInsuranceAuditor:
    def __init__(self, url):
        self.base_url = url
        self.results = []
        options = Options()
        options.add_argument('--headless')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--window-size=1920,1080')
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
        
    def add_result(self, issue, status, severity, details, fix):
        self.results.append({
            'Issue': issue,
            'Status': status,
            'Severity': severity,
            'Details': details,
            'Fix': fix
        })
    
    def check_branding_bug(self):
        soup = BeautifulSoup(self.driver.page_source, 'html.parser')
        header = soup.find('header') or soup.find('nav')
        if header:
            text = header.get_text()
            if '4B4' in text or 'BridgesInsurance' in text or '4B4 BridgesInsurance' in text:
                self.add_result(
                    'Branding Bug: "4B4 BridgesInsurance"',
                    'FAIL',
                    'CRITICAL',
                    f'Found incorrect branding in header: {text[:100]}',
                    'Fix header text to "4 Bridges Insurance" with proper spacing'
                )
            else:
                self.add_result('Branding Bug', 'PASS', 'CRITICAL', 'Header branding correct', '')
    
    def check_social_links(self):
        soup = BeautifulSoup(self.driver.page_source, 'html.parser')
        footer = soup.find('footer')
        broken = []
        if footer:
            links = footer.find_all('a', href=True)
            for link in links:
                href = link['href']
                if href in ['#', '/', '/blog'] or href == self.base_url:
                    broken.append(f"{link.get_text(strip=True)}: {href}")
        
        if broken:
            self.add_result(
                'Broken Social/Footer Links',
                'FAIL',
                'HIGH',
                f'{len(broken)} broken links: {", ".join(broken[:5])}',
                'Update footer links to actual social media URLs and valid internal pages'
            )
        else:
            self.add_result('Social/Footer Links', 'PASS', 'HIGH', 'All links valid', '')
    
    def check_accessibility_br_tags(self):
        soup = BeautifulSoup(self.driver.page_source, 'html.parser')
        br_tags = soup.find_all('br')
        br_count = len(br_tags)
        
        # Check for excessive consecutive <br> tags
        excessive = []
        for i, br in enumerate(br_tags[:-1]):
            next_sibling = br.find_next_sibling()
            if next_sibling and next_sibling.name == 'br':
                excessive.append(str(br.parent)[:50] if br.parent else 'unknown')
        
        if br_count > 20 or len(excessive) > 5:
            self.add_result(
                'Excessive <br> Tags',
                'FAIL',
                'MEDIUM',
                f'{br_count} total <br> tags, {len(excessive)} consecutive pairs',
                'Replace <br> tags with semantic HTML (p, div) and CSS margins'
            )
        else:
            self.add_result('Accessibility: <br> Tags', 'PASS', 'MEDIUM', f'{br_count} <br> tags (acceptable)', '')
    
    def check_mobile_responsive(self):
        # Test mobile viewport
        self.driver.set_window_size(375, 667)
        time.sleep(1)
        
        soup = BeautifulSoup(self.driver.page_source, 'html.parser')
        
        # Check viewport meta
        viewport = soup.find('meta', {'name': 'viewport'})
        
        # Check for mobile menu
        mobile_menu = soup.find(['button', 'div'], {'class': lambda x: x and any(m in str(x).lower() for m in ['mobile', 'hamburger', 'menu-toggle'])})
        
        # Reset to desktop
        self.driver.set_window_size(1920, 1080)
        
        issues = []
        if not viewport:
            issues.append('Missing viewport meta tag')
        if not mobile_menu:
            issues.append('No mobile menu detected')
        
        if issues:
            self.add_result(
                'Mobile Responsiveness',
                'FAIL',
                'HIGH',
                ', '.join(issues),
                'Add viewport meta tag and implement mobile navigation'
            )
        else:
            self.add_result('Mobile Responsiveness', 'PASS', 'HIGH', 'Mobile elements present', '')
    
    def check_partner_logos(self):
        soup = BeautifulSoup(self.driver.page_source, 'html.parser')
        
        # Look for partner/carrier sections
        partner_keywords = ['partner', 'carrier', 'provider', 'company']
        partner_section = None
        for keyword in partner_keywords:
            partner_section = soup.find(['section', 'div'], {'class': lambda x: x and keyword in str(x).lower()})
            if partner_section:
                break
        
        if partner_section:
            logos = partner_section.find_all('img')
            if len(logos) < 3:
                self.add_result(
                    'Partner/Carrier Logos Missing',
                    'FAIL',
                    'MEDIUM',
                    f'Only {len(logos)} logos found in partner section',
                    'Add carrier logos (State Farm, Allstate, Progressive, etc.)'
                )
            else:
                self.add_result('Partner Logos', 'PASS', 'MEDIUM', f'{len(logos)} logos present', '')
        else:
            self.add_result(
                'Partner Section Missing',
                'FAIL',
                'MEDIUM',
                'No partner/carrier section found',
                'Create partner section with carrier logos'
            )
    
    def check_calculator_display(self):
        # Navigate to product pages
        product_pages = ['/life-insurance', '/retirement-planning', '/final-expense-insurance']
        calc_issues = []
        
        for page in product_pages:
            try:
                self.driver.get(self.base_url + page)
                time.sleep(2)
                
                soup = BeautifulSoup(self.driver.page_source, 'html.parser')
                
                # Look for calculator elements
                calculator = soup.find(['div', 'section'], {'class': lambda x: x and 'calculator' in str(x).lower()})
                inputs = soup.find_all('input', {'type': ['number', 'range', 'text']})
                
                if not calculator and len(inputs) < 2:
                    calc_issues.append(f'{page}: Calculator not visible')
            except:
                calc_issues.append(f'{page}: Page not accessible')
        
        # Return to homepage
        self.driver.get(self.base_url)
        
        if calc_issues:
            self.add_result(
                'Calculator Display Issues',
                'FAIL',
                'HIGH',
                '; '.join(calc_issues),
                'Verify ProductDetail component accepts children prop and calculators render'
            )
        else:
            self.add_result('Calculator Display', 'PASS', 'HIGH', 'Calculators visible on product pages', '')
    
    def check_contact_form(self):
        try:
            self.driver.get(self.base_url + '/contact')
            time.sleep(2)
            
            soup = BeautifulSoup(self.driver.page_source, 'html.parser')
            form = soup.find('form')
            
            if not form:
                self.add_result(
                    'Contact Form Missing',
                    'FAIL',
                    'CRITICAL',
                    'No form found on /contact page',
                    'Add contact form to contact page'
                )
                return
            
            # Check for required fields
            inputs = form.find_all(['input', 'textarea'])
            submit = form.find(['button', 'input'], {'type': 'submit'})
            
            issues = []
            if len(inputs) < 3:
                issues.append('Insufficient form fields')
            if not submit:
                issues.append('No submit button')
            
            # Check for error handling
            error_elements = soup.find_all(['div', 'span'], {'class': lambda x: x and 'error' in str(x).lower()})
            
            if issues:
                self.add_result(
                    'Contact Form Issues',
                    'FAIL',
                    'CRITICAL',
                    ', '.join(issues),
                    'Fix form validation and ensure submit button is functional'
                )
            else:
                self.add_result('Contact Form', 'PASS', 'CRITICAL', 'Form structure valid', '')
                
        except Exception as e:
            self.add_result(
                'Contact Form Error',
                'FAIL',
                'CRITICAL',
                f'Cannot access contact page: {str(e)}',
                'Verify /contact route exists and form renders'
            )
        finally:
            self.driver.get(self.base_url)
    
    def run_audit(self):
        print(f"Starting Executive Audit for {self.base_url}...\n")
        
        try:
            self.driver.get(self.base_url)
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            time.sleep(2)
            
            print("[OK] Checking branding bug...")
            self.check_branding_bug()
            
            print("[OK] Checking social/footer links...")
            self.check_social_links()
            
            print("[OK] Checking accessibility (<br> tags)...")
            self.check_accessibility_br_tags()
            
            print("[OK] Checking mobile responsiveness...")
            self.check_mobile_responsive()
            
            print("[OK] Checking partner logos...")
            self.check_partner_logos()
            
            print("[OK] Checking calculator display...")
            self.check_calculator_display()
            
            print("[OK] Checking contact form...")
            self.check_contact_form()
            
            print("\nGenerating report...\n")
            self.generate_report()
            
        except Exception as e:
            print(f"[ERROR] Error during audit: {e}")
        finally:
            self.driver.quit()
    
    def generate_report(self):
        df = pd.DataFrame(self.results)
        
        critical = len(df[df['Severity'] == 'CRITICAL'])
        high = len(df[df['Severity'] == 'HIGH'])
        medium = len(df[df['Severity'] == 'MEDIUM'])
        failed = len(df[df['Status'] == 'FAIL'])
        passed = len(df[df['Status'] == 'PASS'])
        
        # Console output
        print("=" * 80)
        print("EXECUTIVE AUDIT SUMMARY: 4 BRIDGES INSURANCE")
        print("=" * 80)
        print(f"Total Issues Found: {failed}")
        print(f"  [CRITICAL] {critical}")
        print(f"  [HIGH] {high}")
        print(f"  [MEDIUM] {medium}")
        print(f"[PASS] {passed} checks passed")
        print("=" * 80)
        print("\nDETAILED FINDINGS:\n")
        
        for _, row in df.iterrows():
            if row['Status'] == 'FAIL':
                print(f"[{row['Severity']}] {row['Issue']}")
                print(f"   Details: {row['Details']}")
                print(f"   Fix: {row['Fix']}\n")
        
        # CSV export
        csv_file = f"bridges_audit_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
        df.to_csv(csv_file, index=False)
        
        # HTML report
        html_file = "bridges_audit_report.html"
        html = f"""<!DOCTYPE html>
<html>
<head>
    <title>4 Bridges Insurance - Executive Audit</title>
    <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; background: #f8f9fa; }}
        .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; }}
        .header h1 {{ margin: 0; font-size: 28px; }}
        .summary {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; padding: 30px; }}
        .stat {{ background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }}
        .stat-value {{ font-size: 36px; font-weight: bold; margin-bottom: 5px; }}
        .critical {{ color: #dc3545; }}
        .high {{ color: #fd7e14; }}
        .medium {{ color: #ffc107; }}
        .pass {{ color: #28a745; }}
        .issues {{ padding: 0 30px 30px; }}
        .issue-card {{ background: white; margin-bottom: 20px; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #dc3545; }}
        .issue-card.high {{ border-left-color: #fd7e14; }}
        .issue-card.medium {{ border-left-color: #ffc107; }}
        .issue-card.pass {{ border-left-color: #28a745; }}
        .issue-title {{ font-size: 18px; font-weight: bold; margin-bottom: 10px; }}
        .badge {{ display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: bold; }}
        .badge-critical {{ background: #dc3545; color: white; }}
        .badge-high {{ background: #fd7e14; color: white; }}
        .badge-medium {{ background: #ffc107; color: #000; }}
        .badge-pass {{ background: #28a745; color: white; }}
    </style>
</head>
<body>
    <div class="header">
        <h1>Executive UX/UI & Accessibility Audit</h1>
        <p>4 Bridges Insurance Website | {datetime.now().strftime('%B %d, %Y at %I:%M %p')}</p>
    </div>
    <div class="summary">
        <div class="stat"><div class="stat-value critical">{critical}</div>Critical</div>
        <div class="stat"><div class="stat-value high">{high}</div>High Priority</div>
        <div class="stat"><div class="stat-value medium">{medium}</div>Medium</div>
        <div class="stat"><div class="stat-value pass">{passed}</div>Passed</div>
    </div>
    <div class="issues">
"""
        
        for _, row in df.iterrows():
            severity_class = row['Severity'].lower()
            status_class = 'pass' if row['Status'] == 'PASS' else severity_class
            badge_class = f"badge-{severity_class}"
            
            html += f"""
        <div class="issue-card {status_class}">
            <div class="issue-title">
                {row['Issue']}
                <span class="badge {badge_class}">{row['Severity']}</span>
                <span class="badge badge-{'pass' if row['Status'] == 'PASS' else 'critical'}">{row['Status']}</span>
            </div>
            <p><strong>Details:</strong> {row['Details']}</p>
            {'<p><strong>Fix:</strong> ' + row['Fix'] + '</p>' if row['Fix'] else ''}
        </div>
"""
        
        html += """
    </div>
</body>
</html>
"""
        
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"Reports saved:")
        print(f"   - {html_file}")
        print(f"   - {csv_file}")

def main():
    url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8080"
    if not url.startswith('http'):
        url = 'http://' + url
    
    auditor = BridgesInsuranceAuditor(url)
    auditor.run_audit()

if __name__ == "__main__":
    main()
