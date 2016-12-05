# Markdata

Markdata is a easy writing data format extended from Markdown.

Markdata allow you to write data in TABLE, JSON and Markdown format.

Markdata support function and tools to access mongodb, so you may create and write JSON database easily just by any editor.

## Install

```
npm install 
```


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







