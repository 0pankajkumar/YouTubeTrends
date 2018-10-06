import bs4
from urllib2 import urlopen as uReq
from bs4 import BeautifulSoup as soup

def pretifyViews(views):
    views = views.encode('utf8')
    for i in views:
        if i == ",":
            i = ""
        if i == " ":
            i = ""
        if i.isalpha():
            i =""
    return views

my_url = "file:///C:/Users/pankaj%20kumar/Documents/Python%20Scripts/YouTubeTrends/Trending%20-%20YouTube.html"
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

page_soup = soup(page_html, "html.parser")
containers = page_soup.findAll("ytd-video-renderer")

#File handling attributes
filename = "YouTubeTrendsData.csv"
f = open(filename, "w")
f.write("Title" + "," + "Link" + "," + "Views" + "\n")


for container in containers:
    title = container.find("a",{"id":"video-title"}).string
    title = title.encode('utf8')
    
    link = container.find("a",{"id":"video-title"}).get('href')
    link = link.encode('utf8')
    
    
    #Getting into respective video's home page
    uClient2 = uReq(link)
    page_html2 = uClient2.read()
    uClient2.close()
    page_soup2 = soup(page_html2, "html.parser")
    views = page_soup2.find(class_ = 'view-count').text
    
    
    #Flushing out to csv file
    f.write(title.replace(",","|") + "," + link + "," + pretifyViews(views) + "\n")
    




    
    
f.close()

