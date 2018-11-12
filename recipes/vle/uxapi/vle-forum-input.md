This is the specification for an input TSV file for logging in events.

Data should be supplied as a UTF-8 Tab Separated File called forum.tsv

# forum


* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [CLIENT_IP](#client_ip) [1]
* [PLATFORM](#platform) [1]
* [TIMESTAMP](#timestamp) [1]
* [SESSION_ID](#session_id) [0..1]
* [OBJECT_ID](#object_id) [1]
* [OBJECT_NAME](#object_name) [0..1]
* [VLE_MOD_ID](#vle_mod_id) [0..1]
* [UDD_MOD_INST_ID](#udd_mod_inst_id) [0..1]
* [PARENT_ID](#udd_mod_inst_id) [0..1]
* [RESPONSE](#response) [1]



## TIMESTAMP 
### Description
The time at which the user logged in to the platform

### Purpose
Analytics


### Format
ISO 8601 date time

## USERNAME 
### Description
A unique identifier for the individual logging in.

### Purpose
Analytics - to identify the user

### Format
String (255)


## HOMEPAGE 
### Description
URL of the home page of the application for which the login id applies.

### Valid Values
Any

### Format
String (255)


## CLIENT_IP 
### Description
Client's IP address. An IPv4 address is recommended.

### Valid Values
Any

### Format
String (255)


## PLATFORM 
### Description

The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard".

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


## OBJECT_ID 
### Description
An identifier for the forum post.

### Valid Values
Any

### Format
iri

## OBJECT_NAME 
### Description
Optional name of application being logged in to.

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
The value should correspond to the UDD module_instance.MOD_INSTANCE_ID identifier for the relevant module in the UDD data.

### Valid Values
Any

### Format
String (255)

### Notes
Mandatory if VLE_MOD_ID not present.

## PARENT_ID 
### Description

ID of parent forum post

### Valid Values
uri

### Format
String (255)

### Notes
Mandatory if VLE_MOD_ID not present.

## RESPONSE 
### Description

The result.response entity contains plain text from the post encoded as per the encoding of the rest of the statement. There must be no markup,  HTML entity encodings or invalid characters.

### Valid Values
Text

### Format
String (2047)

### Notes
Mandatory if VLE_MOD_ID not present.