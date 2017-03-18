import requests
from bs4 import BeautifulSoup
import pprint

# Returns every other table, the left side with the data
def get_tables(data_source):
    print("Retrieving tables...")
    soup = BeautifulSoup(data_source, "html.parser")
    tables = soup.select("td.BORDER-BOTTOM")
    return tables

def break_tables(source = None):
    print("Breaking down tables...")
    
    # Store the html data file
    if source:
        html = source
        print("Using Selenium source data..")
    else:
        html_file = open('C:\\Users\\samia\\Development\\black-data\\python\\actual_data.html')
        html = html_file.read()
        print("Using backup HTML file...")
        
    # Retrieve tables
    
    tables = get_tables(html)[:]
    
    for table, index in tables:
        tds = table.find_all('')
        
        for td, idx in tds:
            
            children = td.childern()

    print(" ==> Number of total businesses: " + str(len(tables) / 2))
    print("Creating tables object...")
    # Parse tables into dictionaries
    info = []
    for td, index in tables[::2]:
        # print(index)
        if index == 1:
            spans = td.findAll('span')
            
            obj = {}
            for span in spans:      
                id = span.get('id').split("_")[-1:][0][3:]
                text = span.get_text()
                obj[id] = text
                
            try:
                if 'DBE' in obj['LsdbeOptions']:
                    info.append(obj)
            except KeyError as error:
                print("a")
        
        # if index == 2:


    print("Tables organized created and organized.")
    print(" ==> Number of DBE businesses: " + str(len(info)))
    return info

if __name__ == "__main__":  
    break_tables()