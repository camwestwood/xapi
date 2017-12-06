This is the input file for an attendance event.

Data should be supplied as a UTF-8 Tab Seperated File called assignmentgraded.tsv

# assignmentsubmitted


* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [CLIENT_IP](#client_ip) [1]
* [PLATFORM](#platform) [1]
* [SESSION_ID](#session_id) [0..1]
* [OBJECT_ID](#object_id) [1]
* [OBJECT_NAME](#object_name) [0..1]
* [OBJECT_TYPE](#object_type) [1]
* [VLE_MOD_ID](#vle_mod_id) [0..1]
* [UDD_MOD_INST_ID](#udd_mod_inst_id) [0..1]


## USERNAME 
### Description

A unique identifier for that user

### Purpose

Analytics - to identify that user

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
String (255)

## PLATFORM 
### Description

The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"


### Purpose

Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

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
String (255)

## OBJECT_ID 
### Description

An identifier for the application being logged in to.

### Purpose

Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
iri

## NAME 
### Description

Optional name of application being logged in to.

### Purpose

Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

## VLE_MOD_ID 
### Description

Property that connects a courseArea in a VLE with a module. It is used in the module_VLE_map entity of the UDD to link module instances to course areas. Note that several module instances (as identified by their UDD MOD_INSTANCE_ID) can link to one courseArea.

### Purpose

Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)


## UDD_MOD_INST_ID 
### Description

An identifier for a module instance
The value should correspond to the UDD module_instance.MOD_INSTANCE_ID identifier that identifies the relevant module in UDD compliant data.

### Purpose

Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)
