# xAPI recipes for Jisc Learning Analytics v1.1.1

## Statement Vocabulary and Common Structures

* [Vocabulary](vocabulary.md) gives the IRIs and definitions for Verbs, Activity types, and so on, as well as for extensions used in the Statements.
* [Integrations](intergrations) contains the latest intergration exercises for vendors. 
* [Common Structures](common_structures.md) outlines common patterns used across different Statements.
* [Generic Statement Templates](generic/index.md) can be found in this directory.

Learning more about xAPI starting here [https://xapi.com/overview/]

# Recipes

Here are descriptions of Statements that can be sent to the Jisc Learning Data Hub, full Statement examples, and data needed to create the Statement. As far as possible all entities are the same across all the Statements, these reusable parts of Statements are linked from templates and can be found in the [Common Structures](common_structures.md) page which contains all common patterns used across different Statements. If an entity is not reusable then properties are described in the Statement template.

## Accessed Facilties

<table>
<tr><td>Statement Template</td><td>Input TSV definitions</td><td>JSON Template</td></tr>  
<tr><td> <a href = "recipes/access/facility-accessed.md">Accessed facility</a></td><td><a href="recipes/access/uxapi/facility-accessed-input.md">facility-accessed-input.md</a></td><td><a href="recipes/access/uxapi/facility-accessed-template.json">facility-accessed-template.json</a></td></tr>  
</table>

## Attendance

<table>
<tr><td>Statement Template </td><td>Input TSV definitions</td><td>JSON Template</td><td>Example Input</td></tr>
<tr><td> <a href = "recipes/attendance/attendance.md">Attended learning activity </a></td><td><a href="recipes/attendance/uxapi/attendance-input.md"> attendance-input.md</a></td> <td><a href="recipes/attendance/uxapi/attendance-template.json">attendance-template.json</a></td><td><a href="recipes/attendance/tsv/attendance.tsv">TSV</a></td>  </tr>    
</table>

## Econtent services

<table>
<tr><td>Statement Template</td><td>Input TSV definitions</td><td>JSON Template</td></tr>  
<tr><td> <a href = "/recipes/econtent/econtent-viewed-econtent.md">Viewing econtent</a></td><td><a href="recipes/econtent/uxapi/econtent-viewed-econtent-input.md">econtent-viewed-econtent-input.md</a></td><td><a href="recipes/econtent/uxapi/econtent-viewed-econtent-template.json">econtent-viewed-econtent-template.json</a></td></tr>  
<tr><td> <a href = "/recipes/econtent/econtent-accessed-econtent.md">Accessed service</a></td><td><a href="recipes/econtent/uxapi/econtent-accessed-econtent-input.md">econtent-accessed-econtent-input.md</a></td><td><a href="recipes/econtent/uxapi/econtent-accessed-econtent-template.json">econtent-accessed-econtent-template.json</a></td></tr>  
</table>

## Intervention Case

<table>
<tr><td>Statement Template </td><td>Input TSV  definitions</td><td>JSON Template</td></tr>
<tr><td> <a href="recipes/case/create-case.md"> Open a case </a> </td><td> <a href="recipes/case/uxapi/case-create-activity-input.md">case-create-activity-input.md </a>  </td> <td><a href="recipes/case/uxapi/case-create-activity-input.json">case-create-activity-input.json</a></td></tr>
<tr><td><a href="recipes/case/update-case.md"> Update a case</a> </td><td><a href="recipes/case/uxapi/case-update-activity-input.md">case-update-activity-input.md </a>   </td> <td><a href="recipes/case/uxapi/case-update-activity-input.json">case-update-activity-input.json </a>  </td></tr>      
<tr><td> <a href="recipes/case/close-case.md" > Close a case </a> </td><td><a href="recipes/case/uxapi/case-close-activity-input.md">case-close-activity-input.md </a>   </td> <td><a href="recipes/case/uxapi/case-close-activity-input.json">case-close-activity-input.json </a></td></tr>  
<tr><td><a href="recipes/case/create-note.md"> Create a note</a> </td><td><a href="recipes/case/uxapi/note-create-activity-input.md">note-create-activity-input.md </a>   </td> <td><a href="recipes/case/uxapi/note-create-activity-input.json">note-create-activity-input.json </a>  </td></tr>
</table>

</table>

## Library Services

<table>
<tr><td>Statement Template</td><td>Input TSV definitions</td><td>JSON Template</td></tr>  
     <tr><td> <a href = "/recipes/library/library-item-borrowing.md">Library item: Borrowed item</a></td><td><a href="recipes/library/uxapi/library-item-borrowed-input.md">library-item-borrowed-input.md</a></td><td><a href="recipes/library/uxapi/library-item-borrowed-template.json">library-item-template.json</td></tr>
</table>

## Predictive Model Output

<table>
<tr><td>Statement Template </td></tr>
<tr><td> <a href = "/lap/apereo/model_output.md">Predictive Model Alerting</a></td> </tr>    
</table>

## Mobile Applications

<table>
<tr><td>Statement Template</td><td>Input TSV definitions</td><td>JSON Template</td></tr> 
<tr><td><a href = "recipes/studyapps/app-login.md">Logged in</a></td><td><a href = "recipes/studyapps/uxapi/app-loggedin-input.md">recipes/studyapps/uxapi/app-loggedin-input.md</a></td><td><a href = "recipes/studyapp/uxapi/app-loggedin-template.json">recipes/studyapp/uxapi/app-loggedin-template.json</td></tr> 
<tr><tr><td><a href = "recipes/studyapps/app-questions.md">Answered Question</a></td><td><a href = "recipes/studyapps/uxapi/app-answered-question-input.md">recipes/studyapps/uxapi/app-answered-question-input.md</a></td><td><a href = "recipes/studyapps/uxapi/app-answered-question-template.json">recipes/studyapps/uxapi/app-answered-question-template.json</td></tr> 
<tr><td><a href = "recipes/studyapps/app-content-viewed.md">Mobile app content viewed</a></td><td><a href = "recipes/studyapps/uxapi/app-content-viewed.md">app-content-viewed.md</a></td><td><a href = "recipes/studyapp/uxapi/app-content-viewed.json">app-content-viewed.json</td></tr></table>    

## Reading Lists

<table>
<tr><td>Statement Template</td><td>Input TSV definitions</td><td>JSON Template</td><td>Example Input</td></tr>  
     <tr><td> <a href = "recipes/readinglist/readinglist-view-reading-list.md">Viewed a Reading List </a></td><td><a href="recipes/readinglist/uxapi/readinglist-viewed-input.md">readinglist-itemviewed-input.md</a></td><td><a href="recipes/readinglist/uxapi/readinglist-viewed-template.json">readinglist-viewed-template.json</td><td><a href="recipes/readinglist/tsv/readinglist-view-reading-list.tsv">TSV</a></td> </tr>    
         <tr><td> <a href = "recipes/readinglist/readinglist-view-reading-list-item.md">Viewed a Reading List Item</a></td><td><a href="recipes/readinglist/uxapi/readinglist-itemviewed-input.md">readinglist-itemviewed-input.md</a></td><td><a href="recipes/readinglist/uxapi/readinglist-itemviewed-template.json">readinglist-itemviewed-template.json</td><td><a href="recipes/readinglist/tsv/readinglist-view-reading-list-item.tsv">TSV</a></td></tr>   
        <tr><td> <a href = "recipes/readinglist/readinglist-viewed-content.md">Reading List viewed content</a></td><td><a href="recipes/readinglist/uxapi/readinglist-viewed-content-input.md">readinglist-viewed-content-input.md</a></td><td><a href="recipes/readinglist/uxapi/readinglist-viewed-content-template.json">readinglist-viewed-content-template.json</td></tr> 
</table>

## Video

<table>
<tr><td>Statement Template</td><td>Input TSV definitions</td><td>JSON Template</td><td>Example Input</td></tr>  
     <tr><td> <a href = "recipes/video/video-viewed.md">Video Viewed</a></td><td><a href="recipes/video/uxapi/video-viewed-input.md">video-viewed-input.md</a></td><td><a href="recipes/video/uxapi/video-viewed-template.json">video-video-templates.json</td><td><a href="recipes/video/tsv/video.tsv">TSV</a></td></tr>  
</table>

## VLE

These are platform-independent Statements related to Virtual Learning Enviroments. 

<table>
<tr><td>Statement Template</td> <td>Input TSV definitions</td>   <td>JSON Template</td><td>Example Input</td></tr>
<tr><td><a href = "/recipes/vle/vle-login.md">Logged in</a></td><td><a href="recipes/vle/uxapi/vle-loggedin-input.md">vle-loggedin-input.md</a></td><td><a href="recipes/vle/uxapi/vle-loggedin-template.json">vle-loggedin-template.json</a></td> <td><a href="recipes/vle/tsv/logged_in.tsv">TSV</a></td></tr>          
<tr><td> <a href = "/recipes/vle/vle-logout.md">Logged out</a></td><td><a href="recipes/vle/uxapi/vle-loggedout-input.md">vle-loggedout-input.md</a></td><td><a href="recipes/vle/uxapi/vle-loggedout-template.json">vle-loggedout-template.json</a></td>  <td><a href="recipes/vle/tsv/logged_out.tsv">TSV</a></td></tr>    
<tr><td> <a href = "/recipes/vle/vle-viewed-content.md">VLE resource viewed   </a></td><td><a href="recipes/vle/uxapi/vle-resourceviewed-input.md">vle-resourceviewed-input.md</a></td><td><a href="recipes/vle/uxapi/vle-resourceviewed-template.json">vle-resourceviewed-template.json</a></td> <td><a href="recipes/vle/tsv/viewed.tsv">TSV</a></td></tr>    
<tr><td> <a href =  "/recipes/vle/vle-assignment-graded.md">Assignment Graded   </a></td> <td><a href="recipes/vle/uxapi/vle-assignmentgraded-input.md">vle-assignmentgraded-input.md</a></td><td><a href="recipes/vle/uxapi/vle-assignmentgraded-template.json">vle-assignmentgraded-template.json</a> <td><a href="recipes/vle/tsv/assignment_graded.tsv">TSV</a></td></tr>
<tr><td> <a href =  "/recipes/vle/vle-assignment-submitted.md">Assignment Submitted  </a></td><td><a href="recipes/vle/uxapi/vle-assignmentsubmitted-input.md">vle-assignmentsubmitted-input.md</a></td><td><a href="recipes/vle/uxapi/vle-assignmentsubmitted-template.json">vle-assignmentsubmitted-template.json</a></td> <td><a href="recipes/vle/tsv/assignment_submitted.tsv">TSV</a></td></tr><tr><td><a href =  "/recipes/vle/vle-forum.md">Create a forum post</a></td><td><a href="recipes/vle/uxapi/vle-forum-input.md">vle-forum-input.md</a></td><td><a href="recipes/vle/uxapi/vle-forum-template.json">vle-forum-template.json</a></td>             <td><a href="recipes/vle/tsv/vle-forum_post.tsv">TSV</a></td></tr>
<tr><td> <a href =  "/recipes/vle/vle-answered-questions.md">Quiz: Answered Questions</a></td><td><a href="recipes/vle/uxapi/vle-answered-questions-input.md">vle-answered-questions-input.md</a></td><td><a href="recipes/vle/uxapi/vle-answered-questions-template.json">vle-answered-questions-template.json</a></td> <td><a href="recipes/vle/tsv/answered_questions.tsv">TSV</a></td></tr>
<tr><td> <a href =  "/recipes/vle/vle-quiz-completed.md">Quiz: Quiz Completed</a> <td><a href="recipes/vle/uxapi/vle-quiz-completed-input.md">vle-quiz-completed-input.md</a></td><td><a href="recipes/vle/uxapi/vle-quiz-completed-template.json">vle-quiz-completed-template.json</a><td><a href="recipes/vle/tsv/quiz_completed.tsv">TSV</a></td></td> </tr>                                                             
</table>

### All VLE Statement examples

The following JSON samples are recent examples generated from plugins. They may not match the specification.

Bug reports can be directed to the [Moodle](https://github.com/jiscdev/jisc-moodle-xapi-plugin) or [BlackBoard](https://github.com/jiscdev/blackboard-xapi-plugin) Github repository.

* [Blackboard VLE samples](vle/blackboard/Examples.md)
* [Moodle VLE samples](vle/moodle/examples.md)

## Repository Workflow

The simplest way to contribute to the xAPI service is as follows:

1. Add an issue to the issue tracker to alert everyone to what you are working on and why.
2. Tag the issue with the version milestone you'd like the patch to be part of.
3. If the feature is for this version then make an edit or add a file in this repository, and save it to your own branch. If you prefer, you can fork the whole repository and work in your own repository. Otherwise create a feature-branch to work in.
4. If you are creating a new Statement in a recipe then check if a generic template will help. If you are creating a new Statement then consider creating a generic one first.
5. Send a pull request once you're done.
6. The pull request will be discussed at one of our regular meetings and either merged, or kept in the queue, depending on whether more work is required.

You can do all this through the Github GUI, but you're welcome to use any other git tool you prefer.

If the need arises, particular versions will get their own branches, but until that time, everything is merged into the main branch. Releases will be made after the group has come to an agreement.
