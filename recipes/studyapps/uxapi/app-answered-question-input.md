This is the specification for an input TSV file for answered questions events.

Data should be supplied as a UTF-8 Tab Separated File called assignmentgraded.tsv

# answeredquestions


* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [0..1]
* [CLIENT_IP](#client_ip) [1]
* [INTERACTION_TYPE](#interaction_type) [1]
* [SESSION_ID](#session_id) [0..1]
* [OBJECT_ID](#object_id) [1]
* [OBJECT_NAME](#object_name) [0..1]
* [OBJECT_DESCRIPTION](#object_name) [0..1]
* [QUESTION_RESPONSE](#score_response) [0..1]
* [CHOICES](#choices) [0..1]
* [CAPTURED_FROM](#captured_from) [0..1]


## USERNAME 
### Description

A unique identifier for the individual whose work has been graded.

### Valid Values
Any

### Format
String (256)

## HOMEPAGE 

### Description

URL of the home page of the application for which the login id applies.

### Valid Values
Any

### Format
String (256)


## TIMESTAMP 
### Description
The time at which the user answered the question

### Purpose
Analytics


### Format
ISO 8601 date time

## CLIENT_IP 
### Description

Client's IP address. An IPv4 address is recommended.

### Valid Values
Any

### Format
ip address

## INTERACTION_TYPE 
### Description

The type of interaction

### Valid Values
Possible values are: true-false, choice, fill-in, long-fill-in, matching, performance, sequencing, likert, numeric or other. 

### Format
String

## SESSION_ID 
### Description

The APP session ID, or a suitably hashed version of it. A value should be provided if this information is available.

### Valid Values
Any

### Format
String (256)

## OBJECT_ID 
### Description

An identifier for the question being asked.

### Valid Values
Any

### Format
iri

## OBJECT_NAME 
### Description

Optional name for the question being asked.

### Valid Values
Any

### Format
String (255)

## OBJECT_DESCRIPTION 
### Description

Optional description for the question being asked.

### Valid Values
Any

### Format
String (255)

## QUESTION_RESPONSE
### Description

Students answer to question

### Valid Values
Any

### Format
String (255)

## CHOICES
### Description

An array of choices that can be made by the user. Example  ["Saab", "Volvo", "BMW"];

### Valid Values
Any

### Format
String (255)

## CAPTURED_FROM
### Description

The application or device type that captured the attendance; for example, Web, Android, iOS

### Valid Values
Any

### Format
String (255)


