This is the specification for an input TSV file for setting a target

Data should be supplied as a UTF-8 Tab Seperated File called targetsetting.tsv, all target setting statements use the same template.

# resource_viewed

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1]
* [ACTION](#timestamp) [1]
* [OBJECTID](#objectid) [1]
* [OBJECTNAME](#objectname) [1]
* [TARGET_CATEGORY](#target_category)	[0..1]			
* [TARGET_VALUE](#target_value)	[0..1]					
* [TARGET_TIME_PERIOD](#target_time_period)	[0..1]		
* [VLE_MOD_ID](#vle_mod_id) [0..1]
* [UDD_MOD_INST_ID](#udd_mod_inst_id) [0..1]



## USERNAME 
### Description
A unique identifier for the individual interacting with the target.

### Purpose
Analytics - to identify the user

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)


## HOMEPAGE 
### Description
URL of the home page of the application for which the login id applies.

### Valid Values
Any

### Format
String (255)


## TIMESTAMP 
### Description
The time at which the target was created, updated or completed.


### Valid Values
Any

### Format
ISO 8601 date time

## OBJECT_ID 
### Description
An identifier for the target.

### Valid Values
Any

### Format
iri


## OBJECT_NAME 
### Description
Optional name for target..

### Valid Values
Any

### Format
String (255)


## Action
### Description
The action being undertaken, has the student created, updated or achived the target.

### Valid Values
"Created", "Updated", "Achieved"

### Format
String (255)


## Target_category
### Description
Cetegory of the target

### Valid Values
"Reading", "?", "?"

### Format
String (255)

## Target_value
### Description
The value of the target being set

### Valid Values


### Format
String (255)

## Target__time_period
### Description
The time period the target has been set to

### Valid Values


### Format
String (255)


## VLE_MOD_ID 
### Description

An identifier for a course area in a VLE. It is used in conjunction with UDD_MOD_INST_ID to link module instances to course areas. Note that several module instances identified by their UDD_MOD_INST_ID can link to one VLE_MOD_ID in the VLE.

### Valid Values
Any

### Format
String (256)

### Notes


## UDD_MOD_INST_ID 
### Description

An identifier for a module instance
The value should correspond to the UDD module_instance.MOD_INSTANCE_ID identifier for the relevant module in the UDD data.

### Valid Values
Any

### Format
String (255)


