This is the input file for an note-create-activity event.

Data should be supplied as a UTF-8 Tab Seperated File called notes-create.tsv

# note-create-activity


* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1]
* [MODE](#mode) [1]
* [REASON](#reason) [1]
* [WEIGHTING](#weighting) [1]
* [TUTOR_ID](#tutor_id) [1]


## USERNAME 
### Description

A unique identifier for the user who is the target of the note


### Valid Values
Any

### Format
String (255)


## HOMEPAGE 
### Description
URL of the home page of the application

### Valid Values
Any

### Format
String (255)


## TIMESTAMP
### Description

Timestamp representing time that note was created on system


### Valid Values
Any

### Format
ISO 8601 timestamp

## REASON 
### Description

Tutor's reason for note/activity

### Valid Values

TBD

### Format
String (255)


## MODE 
### Description

The mode of note.

### Valid Values

email
text
telephone
TBD

### Format
String (255)


## WEIGHTING
### Description

1-5 severity weighting

### Valid Values

1 - 5

### Format
int (1)


## TUTOR_ID
### Description

id of Tutor creating activity or note


### Valid Values
Any

### Format
String (255)