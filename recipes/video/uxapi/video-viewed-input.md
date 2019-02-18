This is the input file for a video-viewed event.

Data should be supplied as a UTF-8 Tab Separated File called videoviewed.tsv.

# video-viewed-viewed

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1]
* [OBJECT_ID](object_id) [1]
* [VIEWING_TYPE](#viewing_type) [1]
* [VIEWS](#views) [0..1]
* [MINUTES_WATCHED](#minutes_watched) [0..1]
* [SESSION_ID](#session_id) [1]
* [CLIENT_IP](#client_ip) [0..1]



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

### Format
String (255)


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


## VIEWING_TYPE
### Description



### Purpose



### Format


## VIEWS
### Description

The view count for the video

### Valid Values
Any

### Format
int (5)

## SESSION_ID
### Description

The local version of an identifier for the session currently in use by the actor. A value should be provided if this information is available from the source system.


### Valid Values
Any

### Format
String (255)


## CLIENT_IP 
### Description

Client's address location on internet, the IP address that has made the request to view the content.

### Valid Values
Value is a string representing an Internet Protocol address (IP address) in either IPv4 or IPv6 format.

### Format
String (255)



