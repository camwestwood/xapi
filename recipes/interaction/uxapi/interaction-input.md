This is the input file for an note-create-activity event.

Data should be supplied as a UTF-8 Tab Seperated File called notes-create.tsv

# interaction-activity


* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [DATE](#date) [1]
* [INTERACTION_TYPE](#interaction_type) [1]
* [INTERACTED_WITH](#interaction_with) [1]


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


## OBJECT_ID 
### Description

A unique identifier for the case being updated

### Valid Values
Any

## DATE
### Description

Timestamp representing time that interaction took place


### Valid Values
Any

### Format
ISO 8601 timestamp

## INTERACTION_TYPE 
### Description

Type of interaction

### Valid Values

TBD

### Format
String (255)


## INTERACTION_WITH 
### Description

A unique identifier for the user who has been met with

### Valid Values
ANY

### Format
String (255)

