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
*	6.0 [Minting Conventions](./vocabulary.md#namingconventions)

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

The following [xAPI Verbs](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#verb) are defined as part of the Jisc Profile:

### Access
<table>
<tr><th align="left">Verb</th><td>Access</td></tr>
<tr><th align="left">Description</th><td>The action of the user's browser or app requesting a service.</td></tr>
<tr><th align="left">IRI</th><td>http://activitystrea.ms/schema/1.0/access</td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/econtent/econtent-accessed-econtent.md#verb">Accessed service</a> </td></tr>
</table>

### Attended
<table>
<tr><th align="left">Verb</th><td>Attended</td></tr>
<tr><th align="left">Description</th><td>Indicates the Actor was present at a virtual or physical event or activity.</td></tr>
<tr><th align="left">IRI</th><td>http://adlnet.gov/expapi/verbs/attended</td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/attendance/attendance.md#verb">Attended learning activity</a> </td></tr>
</table>

### Completed
<table>
<tr><th align="left">Verb</th><td>Completed</td></tr>
<tr><th align="left">Description</th><td>Completing an Activity - finishing it in its entirety</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/completed">http://adlnet.gov/expapi/verbs/completed</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/vle-assignment-submitted.md">Assignment submitted</a> </td></tr>
</table>

### Logged in
<table>
<tr><th align="left">Verb</th><td>Logged in</td></tr>
<tr><th align="left">Description</th><td>Logged in to some service </td></tr>
<tr><th align="left">IRI</th><td> <a href="https://brindlewaye.com/xAPITerms/verbs/loggedin"> https://brindlewaye.com/xAPITerms/verbs/loggedin </a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/vle/vle-login.md#verb">Logged in</a> </td></tr>
</table>

### Logged out
<table>
<tr><th align="left">Verb</th><td>Logged out</td></tr>
<tr><th align="left">Description</th><td>Logged out of some service</td></tr>
<tr><th align="left">IRI</th><td> <a href="https://brindlewaye.com/xAPITerms/verbs/loggedout"> https://brindlewaye.com/xAPITerms/verbs/loggedout </a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/vle/vle-logout.md#verb">Logged out</a> </td></tr>
</table>

### Scored
<table>
<tr><th align="left">Verb</th><td>Scored</td></tr>
<tr><th align="left">Description</th><td>Indicates a numerical value related to an Actor's performance on an Activity.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/scored">http://adlnet.gov/expapi/verbs/scored</a> </td></tr>
<tr><th align="left">Statement Example</th><td> In <a href="/recipes/vle/vle-assignment-graded.md#verb">Assignment Graded</a> Statement template</td></tr>
</table>

### Answered
<table>
<tr><th align="left">Verb</th><td>Answered</td></tr>
<tr><th align="left">Description</th><td>  Indicates the actor replied to a question, where the object is generally an activity representing the question.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/answered">http://adlnet.gov/expapi/verbs/answered</a> </td></tr>
<tr><th align="left">Statement Example</th><td> In <a href="/recipes/vle/vle-answered-questions.md#verb">Answered Questions</a> Statement template</td></tr>
</table>

### Session timed out
<table>
<tr><th align="left">Verb</th><td>Session timed out</td></tr>
<tr><th align="left">Description</th><td>Indicates that the Activity provider has determined that the session was abnormally terminated, either by an Actor or due to a system failure. </td></tr>
<tr><th align="left">IRI</th><td> <a href="https://w3id.org/xapi/adl/verbs/abandoned">https://w3id.org/xapi/adl/verbs/abandoned</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/vle/Session-timeout.md#verb">Session Timeout</a> </td></tr>
</table>

### Viewed
<table>
<tr><th align="left">Verb</th><td>Viewed</td></tr>
<tr><th align="left">Description</th><td>Indicates that the Actor has viewed the Object.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/verb/viewed"> http://id.tincanapi.com/verb/viewed</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="/recipes/vle/vle-viewed-content.md#verb">Resource Viewed</a> </td></tr>
</table>

<a name="result"></a>
## 2.0 Result

In the Jisc Profile, the use of the [Result entity](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#result) and any of its properties is optional, unless clarified in a specific Statement template. For an example of a Result in a Statement template, see [Assignment Graded](recipes/vle/vle-assignment-graded.md#result).

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

The following are extension properties in the Result entity:

### Attendance Late

<table>
<tr><th align="left">Label</th><td>Attendance Late</td></tr>
<tr><th align="left">Description</th><td>Indicates if Agent had late attendance</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/attendance_late">http://xapi.jisc.ac.uk/attendance_late</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#result">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Integer</td></tr>
<tr><th align="left">Value Space</th><td>1 for late</td></tr>
<tr><th align="left">Sample Value</th><td>1</td></tr>
</table>

### Attendance Category

<table>
<tr><th align="left">Label</th><td>Attendance Category</td></tr>
<tr><th align="left">Description</th><td>Enables the classification of the type of non-attendance</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/attendance_category">http://xapi.jisc.ac.uk/attendance_category</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#result">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>defined by the source system</td></tr>
<tr><th align="left">Sample Value</th><td>C</td></tr>
</table>


### Grade

<table>
<tr><th align="left">Label</th><td>Scored</td></tr>
<tr><th align="left">Description</th><td>A non-numerical assessment result.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/grade">http://xapi.jisc.ac.uk/grade</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/vle-assignment-graded.md#result">Assignment Graded</a> </td></tr>
<tr><th align="left">Data type</th><td>String (256)</td></tr>
<tr><th align="left">Value Space</th><td>String</td></tr>
<tr><th align="left">Sample Value</th><td>5 Stars</td></tr>
</table>

### Submission Time

<table>
<tr><th align="left">Label</th><td>Submission Time</td></tr>
<tr><th align="left">Description</th><td>The time at which the result was submitted</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/submission_time">http://xapi.jisc.ac.uk/submission_time</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#result">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Sample Value</th><td>eg 2015-05-24T09:00Z</td></tr>
</table>

<a name="object"></a>
## 3.0 Object

<a name="activity-types"></a>
### 3.1 Activity Types
The following are types of the [Activity Definition Object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#activity-definition). Activity Types may use the [subType extension](vocabulary.md#sub-type) to further indicate the subType of the Activity.

Some example statements make use of subTypes of Activity Types, but subTypes are not defined by the Jisc profile spec and the examples shown are indicative; it is the responsibility of the plugin to define the subType.  Since the vendors do not own the IRI, these subTypes use a Jisc-controlled namespace that relates to the vendor, vendor product, or institution which _de facto_ defines the sub-type (for example: <a href="https://github.com/jiscdev/xapi/tree/1.0/generic/iri_landing_page.md">http://bblearn.xapi.jisc.ac.uk</a>).

Example:
``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13",
	"definition": {
		"type": "http://xapi.jisc.ac.uk/vle/page",			
		"name": { "en": "Sample page" },			   
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
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/vle-login.md#complete_example">Logged in</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://id.tincanapi.com/activitytype/mobile-app</li></ul>  </td></tr>

</table>


### Assessment

<table>
<tr><th align="left">Label</th><td>Assessment</td></tr>
<tr><th align="left">Description</th><td>An assessment is an Activity Type that determines a learner’s mastery of a particular subject area. An assessment typically has one or more questions.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/activities/assessment">http://adlnet.gov/expapi/activities/assessment</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/vle-assignment-submitted.md">assignment-submitted</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://bblearn.xapi.jisc.ac.uk/selfandpeerassessment</li><li>http://bblearn.xapi.jisc.ac.uk/safeassignment</li><li>http://moodle.xapi.jisc.ac.uk/assignment</li></ul>  </td></tr>
</table>

### Borrowing Site

<table>
<tr><th align="left">Label</th><td>Borrowing Site</td></tr>
<tr><th align="left">Description</th><td>The site that the item was borrowed from.</td></tr>
<tr><th align="left">IRI</th><td>http://xapi.jisc.ac.uk/borrowing_site</td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/library/library-item-borrowing.md">Item borrowed</a> </td></tr>
</table>


### Chat

<table>
<tr><th align="left">Label</th><td>Chat</td></tr>
<tr><th align="left">Description</th><td>A real time chat event, such as a chatroom</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/chat">http://xapi.jisc.ac.uk/chat</a> </td></tr>
</table>

### Collaboration Space

<table>
<tr><th align="left">Label</th><td>Collaboration Space</td></tr>
<tr><th align="left">Description</th><td>A collaborative space where students can work together on group projects and assignments. For example <a href="https://community.canvaslms.com/docs/DOC-10717">Cavas Groups</a></td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/collaboration_space">http://xapi.jisc.ac.uk/collaboration_space</a> </td></tr>
</table>

### Conference

<table>
<tr><th align="left">Label</th><td>Conference</td></tr>
<tr><th align="left">Description</th><td>A formal meeting which includes presentations or discussions</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/activitytype/conference">http://id.tincanapi.com/activitytype/conference</a> </td></tr>
</table>

### Content Tag

<table>
<tr><th align="left">Label</th><td>Content Tag</td></tr>
<tr><th align="left">Description</th><td> Context Activities lists to mark a statement as being related to a particular subject area </td></tr>
<tr><th align="left">IRI</th><td>http://id.tincanapi.com/activitytype/tag</td></tr>
</table>

### Course

<table>
<tr><th align="left">Label</th><td>Course</td></tr>
<tr><th align="left">Description</th><td>A course represents an entire “content package” worth of material; the largest level of granularity. Unless flat, a course consists of multiple modules.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/activities/course">http://adlnet.gov/expapi/activities/course</a> </td></tr>
</table>

### Discussion

<table>
<tr><th align="left">Label</th><td>Discussion</td></tr>
<tr><th align="left">Description</th><td>Represents an ongoing conversation between persons, such as an email thread or a forum topic.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/activitytype/discussion">http://id.tincanapi.com/activitytype/discussion</a> </td></tr>
</table>


### Event

<table>
<tr><th align="left">Label</th><td>Event</td></tr>
<tr><th align="left">Description</th><td>Any event.<br/>The "event" Activity Type should only be used when a more specific (i.e. narrowly-defined) event type, defined on this page, is not available; this IRI indicates that the type of event is unspecified.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://activitystrea.ms/schema/1.0/event">http://activitystrea.ms/schema/1.0/event</a> </td></tr>
</table>


### Timetabled Event

<table>
<tr><th align="left">Label</th><td>Timetabled Event</td></tr>
<tr><th align="left">Description</th><td>Indicates a learning activity that is specifically recorded in the provider's timetabling system for students to attend usually but not exclusively within the context of a module or course; for example, a lecture, seminar or practical. These events will usually have fixed start and end time.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_timetabled">http://xapi.jisc.ac.uk/event_timetabled</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
</table>


### Non-Timetabled Event

<table>
<tr><th align="left">Label</th><td>Non-timetabled Event</td></tr>
<tr><th align="left">Description</th><td>An event not contained within the provider's timetabling system, for example an ad hoc learning activity, pastoral activity or a non-teaching activity. These events may or may not have fixed start and end times, and may or may not be within the context of a module or course. Most importantly, they are not covered by the timetabled event definition.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_non-timetable">http://xapi.jisc.ac.uk/event_non-timetable</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
</table>

### Enrollment

<table>
<tr><th align="left">Label</th><td>Enrollment</td></tr>
<tr><th align="left">Description</th><td>The action of enrolling or being enrolled.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/activities/enrollement">http://xapi.jisc.ac.uk/activities/enrollement</a> </td></tr>
</table>

### External Content

<table>
<tr><th align="left">Label</th><td>External Content</td></tr>
<tr><th align="left">Description</th><td>External URL</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/externalContent">http://xapi.jisc.ac.uk/externalContent</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://moodle.xapi.jisc.ac.uk/scorm</li><li>http://moodle.xapi.jisc.ac.uk/lti</li><li>http://bblearn.xapi.jisc.ac.uk/mashup</li></ul></td></tr>
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
<tr><th align="left">Description</th><td>Accessing any kind of non-web native file type, for example, MS office, video or audio.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/file">http://xapi.jisc.ac.uk/vle/file</a> </td></tr>
</table>

### File

<table>
<tr><th align="left">Label</th><td>File</td></tr>
<tr><th align="left">Description</th><td>Represents any form of document or file </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://activitystrea.ms/schema/1.0/file">http://activitystrea.ms/schema/1.0/file</a> </td></tr>
</table>

### Module

<table>
<tr><th align="left">Label</th><td>Module</td></tr>
<tr><th align="left">Description</th><td>A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/activities/module">http://adlnet.gov/expapi/activities/module</a> </td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/vle/vle-viewed-content.md#object">Resource viewed</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://bblearn.xapi.jisc.ac.uk/learningmodule</li></ul></td></tr>
</table>

### Other

<table>
<tr><th align="left">Label</th><td>Other</td></tr>
<tr><th align="left">Description</th><td>A category for Activity Types that may be generated by VLE specific plugins, but are not explicitly defined in the Jisc Profile.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/other">http://xapi.jisc.ac.uk/other</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://moodle.xapi.jisc.ac.uk/choice</li><ul></td></tr>
</table>

### Outcome

<table>
<tr><th align="left">Label</th><td>Outcome</td></tr>
<tr><th align="left">Description</th><td>A measure used to track competency or mastery in a course or across a program.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/activities/outcome">http://xapi.jisc.ac.uk/activities/outcome</a> </td></tr>
</table>

### Roster

<table>
<tr><th align="left">Label</th><td>Roster</td></tr>
<tr><th align="left">Description</th><td>List of students on the course/module.  </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/activities/roster">http://xapi.jisc.ac.uk/activities/roster</a> </td></tr>
</table>

### Study Goal Statistics

<table>
<tr><th align="left">Label</th><td>Study Goal Statistics</td></tr>
<tr><th align="left">Description</th><td>Statistics for the Study Goal application </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/studygoal/stats">http://xapi.jisc.ac.uk/studygoal/stats</a> </td></tr>
</table>

### Subject Area

<table>
<tr><th align="left">Label</th><td>Subject Area</td></tr>
<tr><th align="left">Description</th><td>The subject area of the object.</td></tr>
<tr><th align="left">IRI</th><td>http://xapi.jisc.ac.uk/subject_area</td></tr>
<tr><th align="left">Statement Example</th><td> <a href="recipes/library/library-item-borrowing.md">Item borrowed</a> </td></tr>
</table>

### Syllabus

<table>
<tr><th align="left">Label</th><td>Syllabus</td></tr>
<tr><th align="left">Description</th><td>Information that defines the academic expectations and responsibilities. </td></tr>
<tr><th align="left">IRI</th><td>http://xapi.jisc.ac.uk/activities/syllabus</td></tr>
</table>

### Tutor session

<table>
<tr><th align="left">Label</th><td>Tutor session</td></tr>
<tr><th align="left">Description</th><td>Represents a tutoring session.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/activitytype/tutor-session">http://id.tincanapi.com/activitytype/tutor-session</a> </td></tr>
</table>

### User profile

<table>
<tr><th align="left">Label</th><td>User profile</td></tr>
<tr><th align="left">Description</th><td>A page displaying information about a user.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/activitytype/user-profile">http://id.tincanapi.com/activitytype/user-profile</a> </td></tr>
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
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/vle/vle-viewed-content.md#object">Resource viewed</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://moodle.xapi.jisc.ac.uk/page</li><li>http://bblearn.xapi.jisc.ac.uk/blankpage</li><li>http://bblearn.xapi.jisc.ac.uk/modulepage</li></ul></td></tr>
</table>


### VLE quiz

<table>
<tr><th align="left">Label</th><td>VLE quiz</td></tr>
<tr><th align="left">Description</th><td>Quiz within a VLE</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/quiz">http://xapi.jisc.ac.uk/vle/quiz</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/vle/vle-viewed-content.md#object">Resource viewed</a> </td></tr>
<tr><th align="left">Example Subtypes</th><td><ul><li>http://moodle.xapi.jisc.ac.uk/quiz</li><li>http://bblearn.xapi.jisc.ac.uk/test</li><li>http://bblearn.xapi.jisc.ac.uk/survey</li></ul>  </td></tr>
</table>


### Wiki

<table>
<tr><th align="left">Label</th><td>Wiki</td></tr>
<tr><th align="left">Description</th><td>Website which users can collaboratively modify directly from the web browser. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/activities/wiki">http://xapi.jisc.ac.uk/activities/wiki</a> </td></tr>
</table>

<a name="extensions"><a/>
## 4.0 Object Definition and Context Extensions
The following are Jisc Profile extensions to be used in [object.definition.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#object).

### Application Type (Deprecated)

Was used in older recipes to identify the genre of software application. Best practice is to use subType instead.

<table>
<tr><th align="left">Label</th><td>Application Type</td></tr>
<tr><th align="left">Description</th><td>Identifies the genre of software application</td></tr>
<tr><th align="left">IRI</th><td><a href="http://xapi.jisc.ac.uk/applicationType">http://xapi.jisc.ac.uk/applicationType</a></td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/vle/vle-login.md#object">Logged in</a> </td></tr>
<tr><th align="left">Data Type</th><td>IRI</td></tr>
<tr><th align="left">Sample Value</th><td>http://id.tincanapi.com/activitytype/lms</td></tr>
</table>

### Captured From

<table>
<tr><th align="left">Label</th><td>Captured From</td></tr>
<tr><th align="left">Description</th><td>The application or device type that captured the attendance; for example, Web, Android, iOS</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/captured_from">http://xapi.jisc.ac.uk/captured_from</a> </td></tr>
<tr><th align="left">Data Type</th><td>string </td></tr>
<tr><th align="left">Sample Value</th><td>ios</td></tr>
</table>

### Course area

For more information, see Jisc Profile [CourseArea properties](#coursearea).

<table>
<tr><th align="left">Label</th><td>Course area</td></tr>
<tr><th align="left">Description</th><td> Course/parent area by its home page URI </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/courseArea">http://xapi.jisc.ac.uk/courseArea</a> </td></tr>
<tr><th align="left">Data Type</th><td>A JSON Object</td></tr>
<tr><th align="left">Value Space</th><td>JSON Object with properties vle_mod_id and uddModInstanceID</td></tr>
</table>

### DateTime

<table>
<tr><th align="left">Label</th><td>DateTime</td></tr>
<tr><th align="left">Description</th><td>Value representing a calendar date and time, such as 2013-08-27T09:26:45.001Z. Value should be a string formatted as an ISO8601 date and time to match the rest of the specification values.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/datetime">http://id.tincanapi.com/extension/datetime</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>ISO 8601 date time</td></tr>
<tr><th align="left">Sample Value</th><td>2016-02-05T17:59:45.000Z</td></tr>
</table>

### Device Location

<table>
<tr><th align="left">Label</th><td>Device Location</td></tr>
<tr><th align="left">Description</th><td>Value should be a GeoJSON Object as defined by the GeoJSON specification. GeoJSON can be used to represent GPS coordinates, as well as other geometric entities. See http://www.geojson.org/ for more information.</td></tr>
<tr><th align="left">IRI</th><td> <a href="https://xapi.jisc.ac.uk/deviceLocation">https://xapi.jisc.ac.uk/deviceLocation</a> </td></tr>
<tr><th align="left">Data Type</th><td>JSON Object</td></tr>
<tr><th align="left">Value Space</th><td>GeoJSON Object</td></tr>
</table>

### Due Date

<table>
<tr><th align="left">Label</th><td>Due Date</td></tr>
<tr><th align="left">Description</th><td>Date student's work is due to be submitted. Format is ISO8601 date time. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/dueDate">http://xapi.jisc.ac.uk/dueDate</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/vle/vle-assignment-graded.md#object">assignment-graded</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>ISO 8601 date time</td></tr>
<tr><th align="left">Sample Value</th><td>2016-02-05T17:59:45.000Z</td></tr>
</table>

### Duration

<table>
<tr><th align="left">Label</th><td>Duration</td></tr>
<tr><th align="left">Description</th><td>Value representing a length of time, for example the length of a video. Value should be formatted as an ISO8601 duration to match the result.duration property. Note that ISO8601 duration allows representations to extend beyond their carry over points; for example one and a half hours can be represented as either PT1H30M0S or PT90M. This extension will generally be used within an Activity Definition to indicate a length of an Activity as compared to the result.duration which captures the length of time for a specific event. For example a video may be 5 minutes long (this extension), but an Actor may have only watched 30 seconds of it (the result.duration). </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/duration">http://id.tincanapi.com/extension/duration</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>ISO 8601 duration</td></tr>
<tr><th align="left">Sample Value</th><td>PT1H30M0S</td></tr>
</table>

### Event Mandatory

<table>
<tr><th align="left">Label</th><td>Event Mandatory</td></tr>
<tr><th align="left">Description</th><td>Indicates whether or not the session is optional.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_mandatory">http://xapi.jisc.ac.uk/event_mandatory</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Boolean</td></tr>
<tr><th align="left">Value Space</th><td>1 for mandatory, 0 for non mandatory</td></tr>
<tr><th align="left">Sample Value</th><td>1</td></tr>
</table>

### Event Max Count

<table>
<tr><th align="left">Label</th><td>Event max count</td></tr>
<tr><th align="left">Description</th><td>Value representing the total number of people who could have gone to the session</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_max_count">http://xapi.jisc.ac.uk/event_type_id</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Integer</td></tr>
<tr><th align="left">Sample Value</th><td>32</td></tr>
</table>

### Event Type Description

<table>
<tr><th align="left">Label</th><td>Event Type Description</td></tr>
<tr><th align="left">Description</th><td>Plain text describing an event</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/event_type_description">http://xapi.jisc.ac.uk/event_type_id</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Description of event</td></tr>
<tr><th align="left">Sample Value</th><td>Lecture</td></tr>
</table>

### Event Type ID

<table>
<tr><th align="left">Label</th><td>Event Type ID</td></tr>
<tr><th align="left">Description</th><td>Value representing an Activity Type (for example 1 for lecture, 2 for seminar)</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/activity_type_id">http://xapi.jisc.ac.uk/activity_type_description</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="/recipes/attendance/attendance.md#object">attendance</a> </td></tr>
<tr><th align="left">Data Type</th><td>Integer</td></tr>
<tr><th align="left">Value Space</th><td>Related to activity type.</td></tr>
<tr><th align="left">Sample Value</th><td>1</td></tr>
</table>

### IP address

<table>
<tr><th align="left">Label</th><td>Session id</td></tr>
<tr><th align="left">Description</th><td>Client's address location on internet</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/ip-address">http://id.tincanapi.com/extension/ip-address</a> </td></tr>
<tr><th align="left">Data Type</th><td>String </td></tr>
<tr><th align="left">Value Space</th><td>IP address in either IPv4 or IPv6 format</td></tr>
<tr><th align="left">Sample Value</th><td>10.3.3.48</td></tr>
</table>

### Planned End Time

<table>
<tr><th align="left">Label</th><td>End time</td></tr>
<tr><th align="left">Description</th><td>An ISO8601 timestamp representing the planned end time of a scheduled or planned event.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/endtime">http://xapi.jisc.ac.uk/endtime</a> </td></tr>
<tr><th align="left">Data Type</th><td>ISO 8601 timestamp</td></tr>
<tr><th align="left">Value Space</th><td>Timestamp</td></tr>
<tr><th align="left">Sample Value</th><td>2016-02-05T10:00:00.000Z</td></tr>
</table>

### Planned Start Time

<table>
<tr><th align="left">Label</th><td>Start time</td></tr>
<tr><th align="left">Description</th><td>An ISO8601 timestamp representing the planned start time of a scheduled or planned event.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/starttime">http://xapi.jisc.ac.uk/starttime</a> </td></tr>
<tr><th align="left">Data Type</th><td>ISO 8601 timestamp</td></tr>
<tr><th align="left">Value Space</th><td>Timestamp</td></tr>
<tr><th align="left">Sample Value</th><td>2016-02-05T10:00:00.000Z</td></tr>
</table>

### Recipe Category

<table>
<tr><th align="left">Label</th><td>Recipe Category</td></tr>
<tr><th align="left">Description</th><td>Identifies the recipe category for querying lookup. </td></tr>
<tr><th align="left">string</th><td> <a href="https://xapi.jisc.ac.uk/recipeCat">https://xapi.jisc.ac.uk/recipeCat</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/vle/vle-login.md#context">Logged in</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Any recipe Category</td></tr>
<tr><th align="left">Sample Value</th><td>Attendance</td></tr>
</table>

### Recipe Version (deprecated since 1.0)

<table>
<tr><th align="left">Label</th><td>Recipe Version</td></tr>
<tr><th align="left">Description</th><td>Version of profile the Statement template was taken from. Version number can be found on recipe page. Data CAN be supplied that meets later, experimental or tweaked versions of Statements or recipes by using version number of the form “x-[dateStamp]”. Purely experimental data can have version number of “x-ignore”. This data can be anything, and should be ignored in normal processing.
</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/recipeVersion">http://xapi.jisc.ac.uk/recipeVersion</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Version number found on recipe page, follows Semantic Versioning.</td></tr>
<tr><th align="left">Sample Value</th><td>1.0</td></tr>
</table>

### Session id

<table>
<tr><th align="left">Label</th><td>Session id</td></tr>
<tr><th align="left">Description</th><td>Local identifier for the internet session</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/sessionId">http://xapi.jisc.ac.uk/sessionId</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Session id as reported by the VLE</td></tr>
<tr><th align="left">Sample Value</th><td>32456891</td></tr>
</table>

### Statement Category

<table>
<tr><th align="left">Label</th><td>Statement Category (Deprecated as of 1.0.3) </td></tr>
<tr><th align="left">Description</th><td>Identifies the statement category for querying lookup. </td></tr>
<tr><th align="left">string</th><td> <a href="https://xapi.jisc.ac.uk/statementCat">https://xapi.jisc.ac.uk/statementCat</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/vle/vle-login.md#context">Logged in</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Attendance, VLE, Library</td></tr>
<tr><th align="left">Sample Value</th><td>Attendance</td></tr>
</table>

### Sub Type

<table>
<tr><th align="left">Label</th><td>Sub Type </td></tr>
<tr><th align="left">Description</th><td>Identifies the sub genre of any Activity Type.  </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/subType">http://xapi.jisc.ac.uk/subType</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/vle/vle-login.md#object">Logged in</a> </td></tr>
<tr><th align="left">Data Type</th><td>IRI or String</td></tr>
<tr><th align="left">Sample Value</th><td>http://id.tincanapi.com/activitytype/lms</td></tr>
</table>

### User Agent

<table>
<tr><th align="left">Label</th><td>User Agent</td></tr>
<tr><th align="left">Description</th><td>String with User-Agent characteristics. Used to identify the application type, operating system, software vendor or software version of the requesting software user agent. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/extensions/user-agent">http://xapi.jisc.ac.uk/subType</a> </td></tr>
<tr><th align="left">Example in Statement template</th><td> <a href="recipes/studyapps/app-login.md#object">Application Logged in</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Sample Value</th><td>Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405</td></tr>
</table>

### xAPI Profile Version

<table>
<tr><th align="left">Label</th><td>Jisc Profile Version</td></tr>
<tr><th align="left">Description</th><td>Version number of the xAPI Jisc Profile being used; found on homepage of the current Github repository.
</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/version">http://xapi.jisc.ac.uk/version</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>A version number as specified on homepage the Github homepage for the Jisc xAPI, for example "1.0.2".</td></tr>
<tr><th align="left">Sample Value</th><td>1.0</td></tr>
</table>

### Bytes Downloaded

<table>
<tr><th align="left">Label</th><td>Jisc Profile Version</td></tr>
<tr><th align="left">Description</th><td>Bytes downloaded by the client when making a request for electronic content
</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/BytesDownloaded">http://xapi.jisc.ac.uk/BytesDownloaded</a> </td></tr>
<tr><th align="left">Data Type</th><td>Integer</td></tr>
<tr><th align="left">Value Space</th><td>Any Integer representing the number of bytes downloaded</td></tr>
<tr><th align="left">Sample Value</th><td>1200</td></tr>
</table>


<a name="coursearea"></a>
## 5.0 Properties of courseArea extension
The courseArea extension indicates the academic context in which the Activity is situated (for example umbrella course or parent area). In VLE statements the properties in courseArea must be a UDD Module Instance ID or a VLE Module ID or both. In attendance statements the course instance id must be provided, module instance id should be provided if available.

Example of courseArea usage in VLE statement:
``` javascript
      	"extensions":	{
      		"http://xapi.jisc.ac.uk/courseArea": {
			"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
			"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
		}
	}
```

### UDD Module Instance ID


Example of courseArea usage in attendance statement:
``` javascript
      	"extensions":	{
		"http://xapi.jisc.ac.uk/courseArea": {
        		"http://xapi.jisc.ac.uk/uddCourseInstanceID": "LA101-200",
			"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
            	}
	}
```

### UDD Course Instance ID

<table>
<tr><th align="left">Label</th><td>UDD Course Instance ID</td></tr>
<tr><th align="left">Description</th><td>An identifier for a course instance<br/>The value should correspond to the <a href="https://github.com/jiscdev/analytics-udd/blob/master/udd/course_instance.md#course_instance_id">UDD course_instance.COURSE_INSTANCE_ID</a> identifier for the relevant course instance in the UDD data.</td></tr>
<tr><th align="left">Cardinality</th><td>VLE statements: optional<br/>attendance statements: mandatory</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/uddCourseInstanceID">http://xapi.jisc.ac.uk/uddCourseInstanceID</a> </td></tr>
</table>


### UDD Module Instance ID

<table>
<tr><th align="left">Label</th><td>UDD Module Instance ID</td></tr>
<tr><th align="left">Description</th><td>An identifier for a module instance<br/>The value should correspond to the <a href="https://github.com/jiscdev/analytics-udd/blob/master/udd/module_instance.md#mod_instance_id">UDD module_instance.MOD_INSTANCE_ID</a> identifier for the relevant module in the UDD data.</td></tr>
<tr><th align="left">Cardinality</th><td>VLE statements: mandatory if vle_mod_id not present, else optional<br/>
attendance statements: optional
</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/uddModInstanceID">http://xapi.jisc.ac.uk/uddModInstanceID</a> </td></tr>
</table>


### VLE Module ID

<table>
<tr><th align="left">Label</th><td>VLE Module ID</td></tr>
<tr><th align="left">Description</th><td>An identifier for a course area in a VLE. It is used in conjunction with uddModInstanceID to link module instances to course areas. Note that several module instances identified by their uddModInstanceID can link to one vle_mod_id in the VLE.</td></tr>
<tr><th align="left">Cardinality</th><td>VLE statements: mandatory if uddModInstanceID not present, else optional<br/>
attendance statements: optional
</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle_mod_id">http://xapi.jisc.ac.uk/vle_mod_id</a> </td></tr>
</table>

<a name="namingconventions"></a>
## 6.0 Naming Conventions

* Minted IRIs must indicate the entity they are to be used in. For example: xapi.jisc.ac.uk/verbs/verb, xapi.jisc.ac.uk/extensions/extension
* Minted IRIs to use snakecase:  xapi.jisc.ac.uk/extensions/snake_case
