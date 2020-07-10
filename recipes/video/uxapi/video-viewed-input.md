This is the input file for a video-viewed event.

Data should be supplied as a UTF-8 Tab Separated File called videoviewed.tsv.

# video-viewed

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1]
* [OBJECT_ID](object_id) [1]
* [OBJECT_NAME](#object_name) [0..1]
* [MINUTES_WATCHED](#minutes_watched) [0..1]
* [UDD_MOD_INST_ID](#udd_mod_inst_id) [0..1]
* [VLE_MOD_ID](#vle_mod_id) [0..1]
* [PLATFORM](#platform) [0..1] 

## USERNAME 
### Description

A unique identifier for that user

### Valid Values
Any

### Format
String (255)

## HOMEPAGE 
### Description
URL of the home page of the application for which the login id applies.

### Valid Values
Any


## TIMESTAMP
### Description

Timestamp representing time

### Valid Values
Any

### Format
ISO 8601 timestamp

## OBJECT_ID 
### Description

A unique identifier for that item

### Valid Values
Any

### Format
String (255)

## OBJECT_NAME 
### Description
Optional name for resource being viewed.

### Valid Values
Any

### Format
String (255)

## MINUTES_WATCHED 
### Description
Number of minutes watches.  This is as a decimal value, including the seconds such as 14.34.

### Format
Decimal

## VLE_MOD_ID 
### Description
An identifier for a course area in a VLE. It is used in conjunction with UDD_MOD_INST_ID to link module instances to course areas. Note that several module instances identified by their UDD_MOD_INST_ID can link to one VLE_MOD_ID in the VLE.

### Valid Values
Any

### Format
String (255)

### Notes
Mandatory if UDD_MOD_INST_ID not present.


## UDD_MOD_INST_ID 
### Description
An identifier for a module instance
The value should correspond to the UDD module_instance.MOD_INSTANCE_ID identifier that identifies the relevant module in UDD compliant data.

### Valid Values
Any

### Format
String (255)

### Notes
Mandatory if VLE_MOD_ID not present.

## PLATFORM 
### Description
The system/platform the activity has been captured from

### Valid Values
Any

### Format
String (255)