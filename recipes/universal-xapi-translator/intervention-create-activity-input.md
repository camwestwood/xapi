This is the input file for an intervention-create-activity event.

Data should be supplied as a UTF-8 Tab Seperated File called econtent.tsv

# intervention-create-activity

* [USERNAME](#username) [1]
* [TIMESTAMP](#timestamp) [1]
* [MODE](#mode) [1]
* [REASON](#reason) [1]
* [WEIGHTING](#weighting) [1]
* [TUTOR](#tutor) [1]


## USERNAME 
### Description

A unique identifier for the user who is the target of the intervention


### Valid Values
Any

### Format
String (255)

## REASON 
### Description

Tutor's reason for intervention/activity

### Valid Values

TBD

### Format
String (255)

## TIMESTAMP
### Description

Timestamp representing time


### Valid Values
Any

### Format
ISO 8601 timestamp


## MODE 
### Description

The mode of intervention.

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


## TUTOR
### Description

id of Tutor creating activity or intervention


### Valid Values
Any

### Format
String (255)