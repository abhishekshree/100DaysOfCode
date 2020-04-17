import requests 
from bs4 import BeautifulSoup 

result = []
date = []
fileTest = open('data.txt', 'w')
x = 1

def checklastpage():
    URL = "http://www.loyolapatna.edu.in/news/"
    r = requests.get(URL) 
    soup = BeautifulSoup(r.content, 'html5lib') 

    page = soup.select('.page-numbers')
    
    return page[3].get_text()


for i in range(1, int(checklastpage())+1):  
    URL = "http://www.loyolapatna.edu.in/news/page/" + str(i)
    r = requests.get(URL) 
    
    soup = BeautifulSoup(r.content, 'html5lib') 

    result = soup.select('.entry-title')
    date = soup.select('.entry-meta a')


    for r,d in zip(result, date):
        if "Protected:" in r.get_text():
            content = r.get_text().strip().replace("Protected:", str(x)+".") +"  "+ d.get_text() + "\n"
            fileTest.writelines(content)
            x = x + 1
        else:
            pass

fileTest.close()