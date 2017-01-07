# coding=utf-8
import urllib
import urllib2
import re
import json

def cityList():
	# print data ->username=1016903103%40qq.com&password=XXXX
	url = "http://www.58.com/changecity.aspx"
	headers = {'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'}
	request = urllib2.Request(url = url, headers = headers)
	response = urllib2.urlopen(request)
	content = response.read().decode('utf-8')
	pattern = re.compile('<a href="(.*?)" onclick="co\(\'.*?\'\)">(.*?)</a>')
	items = re.findall(pattern, content)
	arr = []
	for item in items:
		dict = {'name': item[1], 'url': item[0]}
		arr.append(dict)
	return arr

# 有国外，要删
def sendData():
	origin = cityList()
	arr = []
	#过滤外国
	k=0
	for i in origin:
		if k < 437:
			arr.append(origin[k])
		k = k + 1
	city = {"city": arr}
	jdata = json.dumps(city)
	url = 'http://127.0.0.1:8360/home/city'
	req = urllib2.Request(url)
	req.add_header('Content-Type', 'application/json')
	response = urllib2.urlopen(req, jdata)
	print(response.read())

sendData()
# cityList()

