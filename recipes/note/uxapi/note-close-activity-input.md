This is the input file for an note-close-activity event.

Data should be supplied as a UTF-8 Tab Seperated File called notes_close.tsv

# note-close-activity

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1]
* [TUTOR_ID](#tutor_id) [1]
* [OBJECT_ID](#item_id) [1]
* [TIMESTAMP](#timestamp) [1]



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

## OBJECT_ID 
### Description

A unique identifier for the item being updated

### Valid Values
Any

### Format
String (255)

## TUTOR_ID
### Description

id of Tutor closing activity/note


### Valid Values
Any

### Format
String (255)

## TIMESTAMP
### Description

Timestamp representing time that note was closed on system


### Valid Values
Any

### Format
ISO 8601 timestamp
