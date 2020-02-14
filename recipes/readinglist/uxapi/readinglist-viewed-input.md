This is the specification for an input TSV file for viewing a reading list.

Data should be supplied as a UTF-8 Tab Seperated File called reading_viewed.tsv

# reading_list_viewed

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1]
* [OBJECT_ID](#object_id) [1]
* [OBJECT_NAME](#object_name) [0..1] 
* [PLATFORM](#platform) [0..1] 
* [LIST_ID](#list_id) [0..1] 


## USERNAME 
### Description
A unique identifier for the individual viewing the resource.

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

## Email 
### Description
An Email address that has only ever been and will ever be assigned to this Agent.

### Valid Values
Email Address

### Format
String (255)

## TIMESTAMP 
### Description
The time at which the user viewed the resource.


### Valid Values
Any

### Format
ISO 8601 date time

## OBJECT_ID 
### Description
An identifier for the resource being viewed.

### Valid Values
Any

### Format
iri


## OBJECT_NAME 
### Description
Optional name for resource being viewed.

### Valid Values
Any

### Format
String (255)


## SESSION_ID 
### Description
The VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.

### Valid Values
Any

### Format
String (255)

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

## USER_AGENT 
### Description
String with User-Agent characteristics. Used to identify the application type, operating system, software vendor or software version of the requesting software user agent. 

### Valid Values
Any

### Format
string