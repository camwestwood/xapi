This is the specification for an input TSV file for assignment submitted events.

Data should be supplied as a UTF-8 Tab Separated File called assignmentsubmitted.tsv

# assignmentsubmitted


* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [CLIENT_IP](#client_ip) [1]
* [SESSION_ID](#session_id) [0..1]
* [OBJECT_ID](#object_id) [1]
* [OBJECT_NAME](#object_name) [0..1]
* [DUE_DATE](#due_date) [0..1]
* [VLE_MOD_ID](#vle_mod_id) [0..1]
* [UDD_MOD_INST_ID](#udd_mod_inst_id) [0..1]
* [USER_AGENT](#user_agent) [0..1]
* [SEQUENCE_NUMBER](#sequence_number) [0..1]

## USERNAME 
### Description
A unique identifier for the individual whose work has been graded.

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

### Purpose
Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)


## CLIENT_IP 
### Description
Client's IP address. An IPv4 address is recommended.

### Purpose
Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
ip address


## SESSION_ID 
### Description

The VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.

### Purpose
Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (256)


## OBJECT_ID 
### Description
An identifier for the assignment being submitted.

### Purpose
Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
iri


## OBJECT_NAME 
### Description
Optional name for the assignment being submitted.

### Purpose
Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (256)


## DUE_DATE
### Description
Indicates when the assignment is due.

### Purpose
Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
ISO 8601 date time


## VLE_MOD_ID 
### Description

An identifier for a course area in a VLE. It is used in conjunction with UDD_MOD_INST_ID to link module instances to course areas. Note that several module instances identified by their UDD_MOD_INST_ID can link to one VLE_MOD_ID in the VLE.

### Purpose
Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (256)

### Notes
Mandatory if UDD_MOD_INST_ID not present.


## UDD_MOD_INST_ID 
### Description
An identifier for a module instance
The value should correspond to the UDD module_instance.MOD_INSTANCE_ID identifier that identifies the relevant module in UDD compliant data.

### Valid Values
Any

### Format
String (256)

### Notes
Mandatory if VLE_MOD_ID not present.

## USER_AGENT 
### Description
String with User-Agent characteristics. Used to identify the application type, operating system, software vendor or software version of the requesting software user agent. 

### Valid Values
Any

### Format
string

## USER_AGENT 
### Description
If the activity is part of a sequence then SequenceNumber can be used as a counter

### Valid Values
Any

### Format
int