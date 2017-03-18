import os, time
from selenium import webdriver
from selenium.webdriver.support.ui import Select

driver = None

def load_driver():
    # Load up the driver for Chrome
    print("Loading driver...")
    # chromedriver = "C:/Users/samia/Downloads/chromedriver_win32/chromedriver"
    chromedriver = "./chromedriver.exe"
    os.environ["webdriver.chrome.driver"] = chromedriver
    global driver
    driver = webdriver.Chrome(chromedriver)

def navigate_to_file():
    # Navigate to the CBE website
    print("Navigating to site...")
    driver.get("https://lsdbe.dslbd.dc.gov/public/certification/search.aspx")

    # Print the selection
    print("Clicking print all button...")
    printSelection = driver.find_element_by_id("tbnPrintAll")
    printSelection.click()  

    # Show the general summary of each business
    print("Clicking print button...")
    showSummary = driver.find_element_by_id("rblPrintOptions_1")
    showSummary.click()
    display = driver.find_element_by_id("btnPrint")
    display.click()

def get_page_source():
    print("Collecting data...")
    global driver
    return driver.page_source

def close_browser():
    global driver
    driver.quit()

if __name__ == "__main__":
    load_driver()
    navigate_to_file()