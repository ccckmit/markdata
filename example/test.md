=============markdown=============
 ##People

|name       | bornDate  | dieDate   | domain                | detail|
|-----------|-----------|-----------|-----------------------|-------|
|Steve Jobs | 1955/2/24 | 2011/10/5 | Computer;Entrepreneur | #SteveJobs|
|Bill Gates | 1955/10/28|           | Computer;Entrepreneur | #BillGates|

##SteveJobs

```object
{
  company:Apple;Pixer;Nextstep
  life:{
    from:1955/2/24
    to:2011/10/5
  }
	array:[1,2,3]
  product:AppleII;iMac;iPod;iPhone;iPad
  timetable:#SteveJobs.TimeTable
  about:#SteveJobs.About
}
```

##BillGates

```object
{
  company:Microsoft
  product:DOS;Windows
  timetable:#BillGates.TimeTable
  about:#BillGates.About
}
```

##林則徐

```object
{
  國籍:中國
  職務:欽差
  年表:#林則徐年表
  關於:#關於林則徐
}
```

##SteveJobs.TimeTable

|time       | event|
|-----------|------|
|1976/4/1   | #Apple Inc. Created|
|1977/4/16  | #AppleII computer introduced at West Coast Computer Faire.|
|2001/10/23 | #iPod released|
|2007/6/29  | #iPhone released|
|2010/4/30  | #iPad released|

##SteveJobs.About

Steven Paul "Steve" Jobs (/ˈdʒɒbz/; February 24, 1955 – October 5, 2011) was an American businessman, inventor, and industrial designer. He was the co-founder, chairman, and chief executive officer (CEO) of Apple Inc.; CEO and majority shareholder of Pixar;[2] a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the microcomputer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak. Shortly after his death, Jobs's official biographer, Walter Isaacson, described him as a "creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing.
...
=============JSON=============
 [
  {
    "id": "#People",
    "type": "table",
    "content": [
      {
        "name": "Steve Jobs",
        "bornDate": "1955/2/24",
        "dieDate": "2011/10/5",
        "domain": "Computer;Entrepreneur",
        "detail": "#SteveJobs"
      },
      {
        "name": "Bill Gates",
        "bornDate": "1955/10/28",
        "dieDate": "",
        "domain": "Computer;Entrepreneur",
        "detail": "#BillGates"
      }
    ]
  },
  {
    "id": "#SteveJobs",
    "type": "object",
    "content": {
      "company": "Apple;Pixer;Nextstep",
      "life": {
        "from": "1955/2/24",
        "to": "2011/10/5"
      },
      "array": [
        1,
        2,
        3
      ],
      "product": "AppleII;iMac;iPod;iPhone;iPad",
      "timetable": "#SteveJobs.TimeTable",
      "about": "#SteveJobs.About"
    }
  },
  {
    "id": "#BillGates",
    "type": "object",
    "content": {
      "company": "Microsoft",
      "product": "DOS;Windows",
      "timetable": "#BillGates.TimeTable",
      "about": "#BillGates.About"
    }
  },
  {
    "id": "#林則徐",
    "type": "object",
    "content": {
      "國籍": "中國",
      "職務": "欽差",
      "年表": "#林則徐年表",
      "關於": "#關於林則徐"
    }
  },
  {
    "id": "#SteveJobs.TimeTable",
    "type": "table",
    "content": [
      {
        "time": "1976/4/1",
        "event": "#Apple Inc. Created"
      },
      {
        "time": "1977/4/16",
        "event": "#AppleII computer introduced at West Coast Computer Faire."
      },
      {
        "time": "2001/10/23",
        "event": "#iPod released"
      },
      {
        "time": "2007/6/29",
        "event": "#iPhone released"
      },
      {
        "time": "2010/4/30",
        "event": "#iPad released"
      }
    ]
  },
  {
    "id": "#SteveJobs.About",
    "type": "markdown",
    "content": "Steven Paul \"Steve\" Jobs (/ˈdʒɒbz/; February 24, 1955 – October 5, 2011) was an American businessman, inventor, and industrial designer. He was the co-founder, chairman, and chief executive officer (CEO) of Apple Inc.; CEO and majority shareholder of Pixar;[2] a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the microcomputer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak. Shortly after his death, Jobs's official biographer, Walter Isaacson, described him as a \"creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing.\n..."
  }
]
