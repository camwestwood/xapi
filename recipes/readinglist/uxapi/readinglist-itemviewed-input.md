This is the specification for an input TSV file for viewing a vle resource.

Data should be supplied as a UTF-8 Tab Seperated File called readinglistitemviewed.tsv

# reading_list_viewed

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1] 
* [OBJECT_ID](#object_id) [1] (item_url)
* [SESSION_ID](#session_id) [0..1] (event_id)
* [PLATFORM](#platform) [0..1] (AUTHORITY_NAME)


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


## ITEM_TYPE 
### Description
Used to identify the type of the object being viewed.

### Valid Values
Any

### Format
iri


## ITEM_SUBTYPE 
### Description
Used to identify the subType of the object being viewed.

### Valid Values
Any

### Format
iri


## CLIENT_IP 
### Description
Client's IP address. An IPv4 address is recommended.

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
