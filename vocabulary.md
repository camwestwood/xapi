# JISC Learning Analytics Statements and Vocabulary
The following terms are in use in the Jisc learning analytics recipes.
NOTE: The xapi.jisc.ac.uk namespace URI may change.
IRIs will not necessarily link to a page in a browser, as these are identifiers and not linked resources.

## Table of Contents
*	1.0	[Verb](./vocabulary.md#verb)
*	2.0	[Result](./vocabulary.md#result)
	*	 2.1 [Result Extensions](./vocabulary.md#resultextensions)
*	3.0	[Object](./vocabulary.md#object)
	*	3.1 [Activity Types](./vocabulary.md#activity-types)
*	4.0 [Object Definition and Context Extensions](./vocabulary.md#extensions)
*	5.0 [CourseArea](./vocabulary.md#coursearea)

<a name="verb"></a>
## 1.0 Verb

The following example of a [Verb entity](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#verb) uses the 'en' language tag, but any RFC 5646 language tag can be used: 

``` javascript
"verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin",
        "display": {
            "en" : "logged in to"
        }
    },
``` 

The following [xAPI verbs](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#verb) are defined as part of the Jisc profile:

### Attended
<table>
<tr><th align="left">Verb</th><td>Attended</td></tr>
<tr><th align="left">Description</th><td>Indicates the actor was present at a virtual or physical event or activity.</td></tr>
<tr><th align="left">IRI</th><td>http://adlnet.gov/expapi/verbs/attended</td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/attendance/attendance.md#verb">Attended learning activity</a> </td></tr>
</table>

### Completed
<table>
<tr><th align="left">Verb</th><td>Completed</td></tr>
<tr><th align="left">Description</th><td>Completing an activity - finishing it in its entirety</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/completed">http://adlnet.gov/expapi/verbs/completed</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/assignment-submitted.md">Assignment submitted</a> </td></tr>
</table>

### Logged in
<table>
<tr><th align="left">Verb</th><td>Logged in</td></tr>
<tr><th align="left">Description</th><td>Logged in to some service </td></tr>
<tr><th align="left">IRI</th><td> <a href="https://brindlewaye.com/xAPITerms/verbs/loggedin"> https://brindlewaye.com/xAPITerms/verbs/loggedin </a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/vle/login.md#verb">Logged in</a> </td></tr>
</table>

### Logged out
<table>
<tr><th align="left">Verb</th><td>Logged out</td></tr>
<tr><th align="left">Description</th><td>Logged out of some service</td></tr>
<tr><th align="left">IRI</th><td> <a href="https://brindlewaye.com/xAPITerms/verbs/loggedout"> https://brindlewaye.com/xAPITerms/verbs/loggedout </a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/vle/logout.md#verb">Logged out</a> </td></tr>
</table>

### Scored
<table>
<tr><th align="left">Verb</th><td>Scored</td></tr>
<tr><th align="left">Description</th><td>Indicates a numerical value related to an actor's performance on an activity.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/scored">http://adlnet.gov/expapi/verbs/scored</a> </td></tr>
<tr><th align="left">Statement Example</th><td> In <a href="/recipes/vle/assignment-graded.md#verb">Assignment Graded</a> statement template</td></tr>
</table>

### Session timed out
<table>
<tr><th align="left">Verb</th><td>Session timed out</td></tr>
<tr><th align="left">Description</th><td>Indicates that the activity provider has determined that the session was abnormally terminated, either by an actor or due to a system failure. </td></tr>
<tr><th align="left">IRI</th><td> <a href="https://w3id.org/xapi/adl/verbs/abandoned">https://w3id.org/xapi/adl/verbs/abandoned</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/vle/Session-timeout.md#verb">Session Timeout</a> </td></tr>
</table>

### Viewed
<table>
<tr><th align="left">Verb</th><td>Viewed</td></tr>
<tr><th align="left">Description</th><td>Indicates that the actor has viewed the object</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/verb/viewed"> http://id.tincanapi.com/verb/viewed</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/vle/Module-View.md#verb">Resource Viewed</a> </td></tr>
</table>

<a name="result"></a>
## 2.0 Result

In the Jisc profile, the use of the [Result entity](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#result) and any of its properties is optional, unless clarified in a specific statement template. For an example of a Result in a statement template, see [assignment graded](recipes/vle/assignment-graded.md#result).

Example:


``` javascript
 "result":{
        "score":{
            "raw":8
                }
        "extensions": {
        	"http://xapi.jisc.ac.uk/grade":"5 stars"
        	}
    },
```


<a name="resultextensions"></a>
### 2.1 Result Extensions

The following are extension properties in the result entity:

### Attendance Late

<table>
<tr><th align="left">Label</th><td>Attendance Late</td></tr>
<tr><th align="left">Description</th><td>Indicates if agent had late attendance</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/attendance_late">http://xapi.jisc.ac.uk/attendance_late</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="/recipes/attendance/attendance.md#result">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Integer</td></tr>
<tr><th align="left">Value Space</th><td>1 for late</td></tr>
<tr><th align="left">Sample Value</th><td>1</td></tr>
</table>

### Attendance Category

<table>
<tr><th align="left">Label</th><td>Attendance Category</td></tr>
<tr><th align="left">Description</th><td>Enables the classification of the type of non-attendance</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/attendance_category">http://xapi.jisc.ac.uk/attendance_category</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="/recipes/attendance/attendance.md#result">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>defined by the source system</td></tr>
<tr><th align="left">Sample Value</th><td>C</td></tr>
</table>

### Grade

<table>
<tr><th align="left">Label</th><td>Scored</td></tr>
<tr><th align="left">Description</th><td>A non-numerical assessment result. Data type is string (256)</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/grade">http://xapi.jisc.ac.uk/grade</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/assignment-graded.md#result">Assignment Graded</a> </td></tr>
<tr><th align="left">Value Space</th><td>String</td></tr>
<tr><th align="left">Sample Value</th><td>5 Stars</td></tr>
</table>

<a name="object"></a>
## 3.0 Object

<a name="activity-types"></a>
### 3.1 Activity Types
The following are types of the [Activity Definition Object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#activity-definition). Activity types may use the [subType extension](vocabulary.md#sub-type) to further indicate the subType of the activity.
Some examples of subTypes are included here. However, the list is not exhaustive, and it is the responsibility of the plugin to define the subType.  Since the vendors do not own the IRI, these subTypes use a Jisc-controlled namespace that relates to the vendor or vendor product (for example: <a href="https://github.com/jiscdev/xapi/tree/1.0/generic/iri_landing_page.md">http://bblearn.xapi.jisc.ac.uk</a>).

Example:
``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13" 
	"definition": {
		"type": "http://xapi.jisc.ac.uk/vle/page",			
		"name": { "en": "Sample page" },			   
		"description": { "en": "sample page" } 
		"extensions": {
				"http://xapi.jisc.ac.uk/subType": "http://bblearn.xapi.jisc.ac.uk/blankpage"
				}
	 }
}
```

### Application

<table>
<tr><th align="left">Label</th><td>Application</td></tr>
<tr><th align="left">Description</th><td>Represents any kind of software application</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://activitystrea.ms/schema/1.0/application">http://activitystrea.ms/schema/1.0/application</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/login.md#complete_example">Logged in</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://id.tincanapi.com/activitytype/mobile-app</li></ul>  </td></tr>

</table>


### Assessment

<table>
<tr><th align="left">Label</th><td>Assessment</td></tr>
<tr><th align="left">Description</th><td>An assessment is an activity type that determines a learner’s mastery of a particular subject area. An assessment typically has one or more questions.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/activities/assessment">http://adlnet.gov/expapi/activities/assessment</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/assignment-submitted.md">assignment-submitted</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://bblearn.xapi.jisc.ac.uk/selfandpeerassessment</li><li>http://bblearn.xapi.jisc.ac.uk/safeassignment</li><li>http://moodle.xapi.jisc.ac.uk/assignment</li></ul>  </td></tr>
</table>

### Chat

<table>
<tr><th align="left">Label</th><td>Chat</td></tr>
<tr><th align="left">Description</th><td>A real time chat event, such as a chatroom</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/chat">http://xapi.jisc.ac.uk/chat</a> </td></tr>
</table>

### Course

<table>
<tr><th align="left">Label</th><td>Course</td></tr>
<tr><th align="left">Description</th><td>A course represents an entire “content package” worth of material. The largest level of granularity. Unless flat, a course consists of multiple modules.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/activities/course">http://adlnet.gov/expapi/activities/course</a> </td></tr>
</table>

### Event

<table>
<tr><th align="left">Label</th><td>Event</td></tr>
<tr><th align="left">Description</th><td>Any event.<br/>The "event" Activity Type should only be used when the type of event is unspecified.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://activitystrea.ms/schema/1.0/event">http://activitystrea.ms/schema/1.0/event</a> </td></tr>
</table>

### External Content

<table>
<tr><th align="left">Label</th><td>External Content</td></tr>
<tr><th align="left">Description</th><td>External URL</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/externalContent">http://xapi.jisc.ac.uk/externalContent</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://jisc.xapi.jisc.ac.uk/scorm</li><li>http://jisc.xapi.jisc.ac.uk/lti</li><li>http://bblearn.xapi.jisc.ac.uk/mashup</li></ul></td></tr>
</table>

### External URL 

<table>
<tr><th align="left">Label</th><td>External URL</td></tr>
<tr><th align="left">Description</th><td>An external URL</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/externalURL">http://xapi.jisc.ac.uk/externalURL</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://moodle.xapi.jisc.ac.uk/externalURL</li><li>http://bblearn.xapi.jisc.ac.uk/webLink</li></ul></td></tr>
</table>

### File (Deprecated as of 1.0. Use Content instead )

<table>
<tr><th align="left">Label</th><td>File</td></tr>
<tr><th align="left">Description</th><td>Accessing any kind of non-web native file type. e.g. MS office, video or audio. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/file">http://xapi.jisc.ac.uk/vle/file</a> </td></tr>
</table>

### Lecture

<table>
<tr><th align="left">Label</th><td>Lecture</td></tr>
<tr><th align="left">Description</th><td>A learning activity that consists mainly of an expert giving a talk to a number of learners.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/lecture">http://xapi.jisc.ac.uk/lecture</a> </td></tr>
</table>

### Module

<table>
<tr><th align="left">Label</th><td>Module</td></tr>
<tr><th align="left">Description</th><td>A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/activities/module">http://adlnet.gov/expapi/activities/module</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/Module-View.md#object">Resource viewed</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://bblearn.xapi.jisc.ac.uk/learningmodule</li></ul></td></tr>
</table>

### Other

<table>
<tr><th align="left">Label</th><td>Other</td></tr>
<tr><th align="left">Description</th><td>Other</td>A category for activity types that may be generated by VLE specific plugins, but are not explicitly defined in the Jisc profile.</tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/other">http://xapi.jisc.ac.uk/other</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://moodle.xapi.jisc.ac.uk/choice</li><ul></td></tr>
</table>

### Study Goal Statistics

<table>
<tr><th align="left">Label</th><td>Study Goal Statistics</td></tr>
<tr><th align="left">Description</th><td>Statistics for the Study Goal application </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/studygoal/stats">http://xapi.jisc.ac.uk/studygoal/stats</a> </td></tr>
</table>

### Tutor session

<table>
<tr><th align="left">Label</th><td>Tutor session</td></tr>
<tr><th align="left">Description</th><td>This represents a tutoring session.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/activitytype/tutor-session">http://id.tincanapi.com/activitytype/tutor-session</a> </td></tr>
</table>

### VLE

<table>
<tr><th align="left">Label</th><td>VLE</td></tr>
<tr><th align="left">Description</th><td>Learning Management System. At its core, a platform used to launch and track learning experiences.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/activitytype/lms ">http://id.tincanapi.com/activitytype/lms </a> </td></tr>
</table>

### VLE content

<table>
<tr><th align="left">Label</th><td>VLE content</td></tr>
<tr><th align="left">Description</th><td>Any generic resource in a VLE</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/content">http://xapi.jisc.ac.uk/vle/content</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://bblearn.xapi.jisc.ac.uk/audio</li><li>http://bblearn.xapi.jisc.ac.uk/video</li><li>http://bblearn.xapi.jisc.ac.uk/image</li><li>http://moodle.xapi.jisc.ac.uk/data</li><li>http://moodle.xapi.jisc.ac.uk/file</li><li>http://moodle.xapi.jisc.ac.uk/glossary</li><li>http://moodle.xapi.jisc.ac.uk/wiki</li><li>http://moodle.xapi.jisc.ac.uk/lesson</li><li>http://bblearn.jisc.xapi.ac.uk/lessonplan</li><li>http://moodle.xapi.jisc.ac.uk/vle/workshop</li></ul></td></tr>
</table>

### VLE forum

<table>
<tr><th align="left">Label</th><td>VLE forum</td></tr>
<tr><th align="left">Description</th><td>A VLE forum/discussion board</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/forum">http://xapi.jisc.ac.uk/vle/forum</a> </td></tr>
</table>

### VLE page

<table>
<tr><th align="left">Label</th><td>VLE page</td></tr>
<tr><th align="left">Description</th><td>Any page within a VLE that is not designed to be learning content, for example navigation or administration pages   </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/page">http://xapi.jisc.ac.uk/vle/page</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="recipes/vle/Module-View.md#object">Resource viewed</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://moodle.xapi.jisc.ac.uk/page</li><li>http://bblearn.xapi.jisc.ac.uk/blankpage</li><li>http://bblearn.xapi.jisc.ac.uk/modulepage</li></ul></td></tr>
</table>


### VLE quiz

<table>
<tr><th align="left">Label</th><td>VLE quiz</td></tr>
<tr><th align="left">Description</th><td>Quiz within a VLE</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/quiz">http://xapi.jisc.ac.uk/vle/quiz</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="recipes/vle/Module-View.md#object">Resource viewed</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://moodle.xapi.jisc.ac.uk/quiz</li><li>http://bblearn.xapi.jisc.ac.uk/test</li><li>http://bblearn.xapi.jisc.ac.uk/survey</li></ul>  </td></tr>
</table>


<a name="extensions"><a/>
## 4.0 Object Definition and Context Extensions
The following are Jisc profile extensions to be used in [object.definition.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#object).

### Application Type (Deprecated)

Was used in older recipes to identify the genre of software application. Best practice is to use subType instead.

<table>
<tr><th align="left">Label</th><td>Application Type </td></tr>
<tr><th align="left">Description</th><td>Identifies the genre of software application </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/applicationType">http://xapi.jisc.ac.uk/applicationType</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="recipes/vle/login.md#object">Logged in</a> </td></tr>
<tr><th align="left">Data Type</th><td>IRI</td></tr>
<tr><th align="left">Sample Value</th><td>http://id.tincanapi.com/activitytype/lms</td></tr>
</table>

### Course area

For more information see Jisc profile [CourseArea properties](#coursearea).

<table>
<tr><th align="left">Label</th><td>course area</td></tr>
<tr><th align="left">Description</th><td> Course/parent area by its home page URI </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/courseArea">http://xapi.jisc.ac.uk/courseArea</a> </td></tr>
<tr><th align="left">Data Type</th><td>A JSON Object</td></tr>
<tr><th align="left">Value Space</th><td>JSON Object with properties vle_mod_id or uddModInstanceID</td></tr>
</table>

### DateTime

<table>
<tr><th align="left">Label</th><td>DateTime</td></tr>
<tr><th align="left">Description</th><td>Value representing a calendar date and time, such as 2013-08-27 09:26:45.001. Value should be a string formatted as an ISO8601 date and time to match the rest of the specification values.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/datetime">http://id.tincanapi.com/extension/datetime</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>ISO 8601 date time</td></tr>
<tr><th align="left">Sample Value</th><td>2016-02-05T17:59:45.000Z</td></tr>
</table>

### Device Location

<table>
<tr><th align="left">Label</th><td>GeoJSON</td></tr>
<tr><th align="left">Description</th><td>Value should be a GeoJSON object as defined by the GeoJSON specification. GeoJSON can be used to represent GPS coordinates, as well as other geometrical entities. See http://www.geojson.org/ for more information.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/geojson">http://id.tincanapi.com/extension/geojson</a> </td></tr>
<tr><th align="left">Data Type</th><td>JSON Object</td></tr>
<tr><th align="left">Value Space</th><td>GeoJSON Object</td></tr>
</table>

### Due Date

<table>
<tr><th align="left">Label</th><td>Due Date</td></tr>
<tr><th align="left">Description</th><td>Date student's work is due to be submitted. Format is ISO 8601 date time. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/dueDate">http://xapi.jisc.ac.uk/dueDate</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="recipes/vle/assignment-graded.md#object">assignment-graded</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>ISO 8601 date time</td></tr>
<tr><th align="left">Sample Value</th><td>2016-02-05T17:59:45.000Z</td></tr>
</table>

### Duration

<table>
<tr><th align="left">Label</th><td>Duration</td></tr>
<tr><th align="left">Description</th><td>Value representing a length of time, for example the length of a video. Value should be formatted as an ISO8601 duration to match the Result.duration property. Note that ISO8601 duration allows representations to extend beyond their carry over points. e.g. one and a half hours can be represented as either PT1H30M0S or PT90M. This extension will generally be used within an Activity Definition to indicate a length of an Activity as compared to the Result.duration which captures the length of time for a specific event. For example a video may be 5 minutes long (this Extension), but an actor may have only watched 30 seconds of it (the Result.duration). </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/duration">http://id.tincanapi.com/extension/duration</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>ISO 8601 duration</td></tr>
<tr><th align="left">Sample Value</th><td>PT1H30M0S</td></tr>
</table>

### Event Mandatory

<table>
<tr><th align="left">Label</th><td>Event Mandatory</td></tr>
<tr><th align="left">Description</th><td>Indicates if the session is optional or not.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_mandatory">http://xapi.jisc.ac.uk/event_mandatory</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Boolean</td></tr>
<tr><th align="left">Value Space</th><td>1 for mandatory, 0 for non mandatory</td></tr>
<tr><th align="left">Sample Value</th><td>1</td></tr>
</table>

### Event Max Count

<table>
<tr><th align="left">Label</th><td>Event max count</td></tr>
<tr><th align="left">Description</th><td>Value representing the total number of people who could have gone to the session</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_max_count">http://xapi.jisc.ac.uk/event_type_id</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Integer</td></tr>
<tr><th align="left">Value Space</th><td></td></tr>
<tr><th align="left">Sample Value</th><td>32</td></tr>
</table>

### Event Type Description

<table>
<tr><th align="left">Label</th><td>Event Type Description</td></tr>
<tr><th align="left">Description</th><td>Plain text describing an event</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_type_description">http://xapi.jisc.ac.uk/event_type_id</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Description of event</td></tr>
<tr><th align="left">Sample Value</th><td>Lecture</td></tr>
</table>

### Event Type ID

<table>
<tr><th align="left">Label</th><td>Event Type ID</td></tr>
<tr><th align="left">Description</th><td>Value representing an activity type. (e.g 1 for lecture, 2 for seminar)</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/activity_type_id">http://xapi.jisc.ac.uk/activity_type_id</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Integer</td></tr>
<tr><th align="left">Value Space</th><td>Related to activty type.</td></tr>
<tr><th align="left">Sample Value</th><td>1</td></tr>
</table>

### IP address

<table>
<tr><th align="left">Label</th><td>Session id</td></tr>
<tr><th align="left">Description</th><td>Client's address location on internet</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/ip-address">http://id.tincanapi.com/extension/ip-address</a> </td></tr>
<tr><th align="left">Data Type</th><td>String </td></tr>
<tr><th align="left">Value Space</th><td>(IP address) in either IPv4 or IPv6 format</td></tr>
<tr><th align="left">Sample Value</th><td>10.3.3.48</td></tr>
</table>

### Planned End Time

<table>
<tr><th align="left">Label</th><td>Planned end time</td></tr>
<tr><th align="left">Description</th><td>An ISO 8601 timestamp representing the planned end time of a scheduled or planned event.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/extension/planned-end-time">http://xapi.jisc.ac.uk/extension/planned-end-time</a> </td></tr>
<tr><th align="left">Data Type</th><td>ISO 8601 timestamp</td></tr>
<tr><th align="left">Value Space</th><td>Timestamp</td></tr>
<tr><th align="left">Sample Value</th><td>2016-02-05T10:00:00.000Z</td></tr>
</table>

### Planned Start Time

<table>
<tr><th align="left">Label</th><td>Planned start time</td></tr>
<tr><th align="left">Description</th><td>An ISO 8601 timestamp representing the planned start time of a scheduled or planned event.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/planned-start-time">http://id.tincanapi.com/extension/planned-start-time</a> </td></tr>
<tr><th align="left">Data Type</th><td>ISO 8601 timestamp</td></tr>
<tr><th align="left">Value Space</th><td>Timestamp</td></tr>
<tr><th align="left">Sample Value</th><td>2016-02-05T10:00:00.000Z</td></tr>
</table>

### Recipe Version (deprecated since 1.0)

<table>
<tr><th align="left">Label</th><td>Recipe Version</td></tr>
<tr><th align="left">Description</th><td>Version of profile the statement template was taken from. Version number can be found on recipe page. Data CAN be supplied that meets later, experimental or tweaked versions of statements or recipes by using version number of the form “x-[dateStamp]”. Purely experimental data can have version number of “x-ignore”. This data can be anything, and should be ignored in normal processing.
</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/recipeVersion">http://xapi.jisc.ac.uk/recipeVersion</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Version number found on recipe page, follows Semantic versioning.</td></tr>
<tr><th align="left">Sample Value</th><td>1.0</td></tr>
</table>

### Session id

<table>
<tr><th align="left">Label</th><td>Session id</td></tr>
<tr><th align="left">Description</th><td>Local identifier for the internet session</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/sessionId">http://xapi.jisc.ac.uk/sessionId</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Session id as reported by the VLE</td></tr
<tr><th align="left">Sample Value</th><td>32456891</td></tr>
</table>

### Sub Type

<table>
<tr><th align="left">Label</th><td>Sub Type </td></tr>
<tr><th align="left">Description</th><td>Identifies the sub genre of any activity type.  </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/subType">http://xapi.jisc.ac.uk/subType</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="recipes/vle/login.md#object">Logged in</a> </td></tr>
<tr><th align="left">Data Type</th><td>IRI or String</td></tr>
<tr><th align="left">Sample Value</th><td>http://id.tincanapi.com/activitytype/lms</td></tr>
</table>

### Timetabled Event

<table>
<tr><th align="left">Label</th><td>Timetabled Event</td></tr>
<tr><th align="left">Description</th><td>Indicates whether or not a learning activity was scheduled.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_timetabled">http://xapi.jisc.ac.uk/event_timetabled</a> </td></tr>
<tr><th align="left">Example in statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Boolean</td></tr>
<tr><th align="left">Value Space</th><td>1 for timetabled events, 0 for non-timetabled events </td></tr>
<tr><th align="left">Sample Value</th><td>1</td></tr>
</table>

### xAPI Profile Version 

<table>
<tr><th align="left">Label</th><td>Jisc Profile Version</td></tr>
<tr><th align="left">Description</th><td>Version number of the xapi Jisc profile being used; found on homepage of the current Github repository.
</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/version">http://xapi.jisc.ac.uk/version</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>A version number as specified on homepage the Github homepage for the Jisc xAPI, for example "1.0".</td></tr>
<tr><th align="left">Sample Value</th><td>1.0</td></tr>
</table>

<a name="coursearea"></a>
## 5.0 CourseArea properties
CourseArea indicates an overall learning opportunity that the learning activity is a part of. The following are properties of the profile extension context.extensions.courseArea:

Example:
``` javascript
      	"http://xapi.jisc.ac.uk/courseArea": {
			"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
			"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
		},
```
  
### UDD Module Instance ID

<table>
<tr><th align="left">Label</th><td>UDD Module Instance ID</td></tr>
<tr><th align="left">Description</th><td>An identifier for a module instance<br/>The value should correspond to the [UDD module_instance.MOD_INSTANCE_ID](https://github.com/jiscdev/analytics-udd/blob/master/udd/module_instance.md#mod_instance_id) identifier that identifies the relevant module in UDD compliant data.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/uddModInstanceID">http://xapi.jisc.ac.uk/uddModInstanceID</a> </td></tr>
</table>

### VLE Module ID

<table>
<tr><th align="left">Label</th><td>VLE Module ID</td></tr>
<tr><th align="left">Description</th><td>Property that connects a course area in a VLE with a module. It is used in the module_VLE_map entity of the UDD to link module instances to course areas. Note that several module instances (as identified by their UDD MOD_INSTANCE_ID) can link to one courseArea.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle_mod_id">http://xapi.jisc.ac.uk/vle_mod_id</a> </td></tr>
</table>

