# Markdata

Markdata is a easy writing data format extended from Markdown.

Markdata allow you to write data in TABLE, JSON and Markdown format.

Markdata support function and tools to access mongodb, so you may create and write JSON database easily just by any editor.

## Install

```
npm install 
```

## Test Data

file : data/test1.mdt

```
#People, table

name       | bornDate  | dieDate   | domain                | detail
------------------------------------------------------------------------
Steve Jobs | 1955/2/24 | 2011/10/5 | Computer;Entrepreneur | #SteveJobs
Bill Gates | 1955/10/28|           | Computer;Entrepreneur | #BillGates

#SteveJob, JSON

{
  company:Apple|Pixer|Nextstep,
  product:Apple II|iMac|iPod|iPhone|iPad,
  timetable:#SteveJobsTimeTable
  about:#AboutSteveJobs
}

#BillGates
{
  company:Microsoft,
  product:DOS|Windows,
  timetable:#BillGatesTimeTable
  about:#AboutBillGates
}

#SteveJobsTimeTable, csv

time,       event
1976/4/1,   #Apple Inc. Created
1977/4/16,  #AppleII computer introduced at West Coast Computer Faire.
2001/10/23, #iPod released
2007/6/29,  #iPhone released
2010/4/30,  #iPad released

#AboutSteveJobs, markdown

Steven Paul "Steve" Jobs (/ˈdʒɒbz/; February 24, 1955 – October 5, 2011) was an American businessman, inventor, and industrial designer. He was the co-founder, chairman, and chief executive officer (CEO) of Apple Inc.; CEO and majority shareholder of Pixar;[2] a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the microcomputer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak. Shortly after his death, Jobs's official biographer, Walter Isaacson, described him as a "creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing.

...
```

## Convert markdata to objects and save to mongodb

```
$ node toMongodb ../data/test1.mdt
=============JSON=============
[{"id":"#People","type":"table","content":[{"name":"Steve Jobs","bornDate":"1955
/2/24","dieDate":"2011/10/5","domain":"Computer;Entrepreneur","detail":"#SteveJo
bs"},{"name":"Bill Gates","bornDate":"1955/10/28","dieDate":"","domain":"Compute
r;Entrepreneur","detail":"#BillGates"}]},{"id":"#SteveJobs","type":"object","con
tent":{"company":"Apple;Pixer;Nextstep","life":{"from":"1955/2/24","to":"2011/10
/5"},"array":[1,2,3],"product":"AppleII;iMac;iPod;iPhone;iPad","timetable":"#Ste
veJobs.TimeTable","about":"#SteveJobs.About"}},{"id":"#BillGates","type":"object
","content":{"company":"Microsoft","product":"DOS;Windows","timetable":"#BillGat
es.TimeTable","about":"#BillGates.About"}},{"id":"#林則徐","type":"object","cont
ent":{"國籍":"中國","職務":"欽差","年表":"#林則徐年表","關於":"#關於林則徐"}},{"
id":"#SteveJobs.TimeTable","type":"table","content":[{"time":"1976/4/1","event":
"#Apple Inc. Created"},{"time":"1977/4/16","event":"#AppleII computer introduced
 at West Coast Computer Faire."},{"time":"2001/10/23","event":"#iPod released"},
{"time":"2007/6/29","event":"#iPhone released"},{"time":"2010/4/30","event":"#iP
ad released"}]},{"id":"#SteveJobs.About","type":"markdown","content":"Steven Pau
l \"Steve\" Jobs (/ˈdʒɒbz/; February 24, 1955 – October 5, 2011) was an America
n businessman, inventor, and industrial designer. He was the co-founder, chairma
n, and chief executive officer (CEO) of Apple Inc.; CEO and majority shareholder
 of Pixar;[2] a member of The Walt Disney Company's board of directors following
 its acquisition of Pixar; and founder, chairman, and CEO of NeXT. Jobs is widel
y recognized as a pioneer of the microcomputer revolution of the 1970s and 1980s
, along with Apple co-founder Steve Wozniak. Shortly after his death, Jobs's off
icial biographer, Walter Isaacson, described him as a \"creative entrepreneur wh
ose passion for perfection and ferocious drive revolutionized six industries: pe
rsonal computers, animated movies, music, phones, tablet computing, and digital
publishing.\n..."}]
```

## Fulltext search query from mongodb

```
$ node queryMongodb.js
items=[{"_id":"5844d2de03ef38a7cf860fdf","id":"#SteveJobs.About","type":"markdow
n","content":"Steven Paul \"Steve\" Jobs (/ˈdʒɒbz/; February 24, 1955 – October
 5, 2011) was an American businessman, inventor, and industrial designer. He was
 the co-founder, chairman, and chief executive officer (CEO) of Apple Inc.; CEO
and majority shareholder of Pixar;[2] a member of The Walt Disney Company's boar
d of directors following its acquisition of Pixar; and founder, chairman, and CE
O of NeXT. Jobs is widely recognized as a pioneer of the microcomputer revolutio
n of the 1970s and 1980s, along with Apple co-founder Steve Wozniak. Shortly aft
er his death, Jobs's official biographer, Walter Isaacson, described him as a \"
creative entrepreneur whose passion for perfection and ferocious drive revolutio
nized six industries: personal computers, animated movies, music, phones, tablet
 computing, and digital publishing.\n..."},{"_id":"5844d2de03ef38a7cf860fda","id
":"#People","type":"table","content":[{"name":"Steve Jobs","bornDate":"1955/2/24
","dieDate":"2011/10/5","domain":"Computer;Entrepreneur","detail":"#SteveJobs"},
{"name":"Bill Gates","bornDate":"1955/10/28","dieDate":"","domain":"Computer;Ent
repreneur","detail":"#BillGates"}]}]
```
