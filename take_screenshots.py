"""
Screenshot Tool for 4 Bridges Insurance Website
Captures full-page screenshots of all pages
"""

from playwright.sync_api import sync_playwright
import os
from datetime import datetime

# All pages to screenshot
PAGES = [
    {'path': '/', 'name': '01_homepage'},
    {'path': '/life-insurance', 'name': '02_life_insurance'},
    {'path': '/health-insurance', 'name': '03_health_insurance'},
    {'path': '/medicare', 'name': '04_medicare'},
    {'path': '/retirement-planning', 'name': '05_retirement_planning'},
    {'path': '/final-expense', 'name': '06_final_expense'},
    {'path': '/estate-planning', 'name': '07_estate_planning'},
    {'path': '/about-us', 'name': '08_about_us'},
    {'path': '/team', 'name': '09_team'},
    {'path': '/blog', 'name': '10_blog'},
    {'path': '/faq', 'name': '11_faq'},
    {'path': '/contact', 'name': '12_contact'},
    {'path': '/careers', 'name': '13_careers'},
    {'path': '/partners', 'name': '14_partners'},
    {'path': '/insurance-glossary', 'name': '15_insurance_glossary'},
    {'path': '/privacy-policy', 'name': '16_privacy_policy'},
    {'path': '/terms-of-service', 'name': '17_terms_of_service'},
]

BASE_URL = 'http://localhost:8080'

def take_screenshots():
    # Create screenshots directory with timestamp
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    output_dir = f'screenshots_{timestamp}'
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Starting screenshot capture...")
    print(f"Output directory: {output_dir}")
    print(f"Base URL: {BASE_URL}")
    print(f"Total pages: {len(PAGES)}\n")
    
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            device_scale_factor=1
        )
        page = context.new_page()
        
        success_count = 0
        failed_pages = []
        
        for idx, page_info in enumerate(PAGES, 1):
            url = f"{BASE_URL}{page_info['path']}"
            filename = f"{page_info['name']}.png"
            filepath = os.path.join(output_dir, filename)
            
            try:
                print(f"[{idx}/{len(PAGES)}] Capturing: {page_info['name']}")
                print(f"    URL: {url}")
                
                # Navigate to page
                page.goto(url, wait_until='networkidle', timeout=30000)
                
                # Wait for content to load
                page.wait_for_timeout(2000)
                
                # Take full page screenshot
                page.screenshot(path=filepath, full_page=True)
                
                print(f"    [OK] Saved: {filename}\n")
                success_count += 1
                
            except Exception as e:
                print(f"    [FAIL] Failed: {str(e)}\n")
                failed_pages.append(page_info['name'])
        
        browser.close()
    
    # Summary
    print("\n" + "="*60)
    print("SCREENSHOT SUMMARY")
    print("="*60)
    print(f"Successful: {success_count}/{len(PAGES)}")
    print(f"Failed: {len(failed_pages)}/{len(PAGES)}")
    
    if failed_pages:
        print(f"\nFailed pages:")
        for page_name in failed_pages:
            print(f"  - {page_name}")
    
    print(f"\nScreenshots saved in: {output_dir}")
    print("="*60)

if __name__ == '__main__':
    print("\n" + "="*60)
    print("4 BRIDGES INSURANCE - SCREENSHOT TOOL")
    print("="*60 + "\n")
    
    try:
        take_screenshots()
    except KeyboardInterrupt:
        print("\n\nScreenshot capture interrupted by user")
    except Exception as e:
        print(f"\n\nError: {str(e)}")
