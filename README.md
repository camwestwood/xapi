# xAPI recipes for the Jisc Learning Analytics Service v1.0.1

## Repository Workflow
The simplest way of contributing to the xAPI service works as follows:

1. Add an issue to the issue tracker to alert everyone to what you are working on and why.
2. Tag the issue with the version milestone you'd like the patch to be a part of.
3. If the feature is for this version then make an edit or add a file in this repository, and save it to your own branch. If you prefer, you can fork the whole repository and work in your own repository. Otherwise create a feature-branch to work in.
4. If you are creating a new Statement in a recipe then check if a generic template will help. If you are creating a new Statement then consider creating a generic one first.
4. Send a pull request once you're done.
5. The pull request will be discussed at one of our regular meetings and either merged, or kept in the queue, depending on whether more work is required.

You can do all this through the Github GUI, but you're welcome to use any other git tool you prefer.

If the need arises, particular versions will get their own branches, but until that time, everything is merged into the main branch. Releases will be made after the group has come to an agreement.

## Statement Vocabulary and Common Structures

* [Vocabulary](vocabulary.md) gives the IRIs and definitions for Verbs, Activity types, and so on, as well as for extensions used in the recipes.
* [Common Structures](common_structures.md) outlines common patterns used across different recipes.
* [Generic Statement Templates](generic/index.md) can be found in this directory.

# Recipes
Here are descriptions of Statements that can be sent to the Jisc Learning Data Hub, full Statement examples, data needed to create the Statement.  As far as possible all entities are the same across all the Statements.

## VLE

These are platform independent Statements related to Virtual Learning Enviroments. JSON examples are generated from plugins. Bug reports can be directed to the [Moodle](https://github.com/jiscdev/jisc-moodle-xapi-plugin) or [BlackBoard](https://github.com/jiscdev/blackboard-xapi-plugin) Github repository.

<table>
<tr><td>Statement Template </td>   <td>JSON example</td><td>Input TSV definitions</td><td>JSON Template</td></tr>
<tr><td> <a href = "/recipes/vle/login.md">Logged in</a></td><td> <a href = "vle/moodle/login.js">Logged in Moodle </a> <br/><a href = "vle/blackboard/loggedin.json"> Logged In Blackboard</a>   </td>  <td><a href="recipes/universal-xapi-translator/vle-loggedin-input.md">vle-loggedin-input.md</a></td><td><a href="recipes/universal-xapi-translator/vle-loggedin-template.json">vle-loggedin-template.json</a></td> </tr>                                                           
<tr><td> <a href = "/recipes/vle/logout.md">Logged out</a></td><td> <a href = "vle/moodle/logout.js">Logged out Moodle </a>  <br/> <a href = "vle/blackboard/loggedout.json"> Logged out Blackboard   </a>    </td>   <td><a href="recipes/universal-xapi-translator/vle-loggedout-input.md">vle-loggedout-input.md</a></td><td><a href="recipes/universal-xapi-translator/vle-loggedout-template.json">vle-loggedout-template.json</a></td> </tr>    
<tr><td> <a href = "/recipes/vle/Module-View.md">VLE resource viewed   </a></td><td><a href = "vle/moodle/moduleview.js">Moodle module viewed </a> <br/> <a href = "vle/blackboard/course_access.json"> Blackboard course acccess  </a> <br/> <a href="vle/blackboard/course_content_access.json">Blackboard content accessed</a></td> <td><a href="recipes/universal-xapi-translator/vle-resourceviewed-input.md">vle-resourceviewed-input.md</a></td><td><a href="recipes/universal-xapi-translator/vle-resourceviewed-template.json">vle-resourceviewed-template.json</a></td></td></tr>    
<tr><td> <a href =  "/recipes/vle/assignment-graded.md">Assignment Graded   </a></td><td> <a href = "vle/moodle/asssignment_graded.json">Assignment graded in Moodle</a><br/> <a href="vle/blackboard/asssignment_graded.json">Assignment graded in Blackboard </a>    <td><a href="recipes/universal-xapi-translator/vle-assignmentgraded-input.md">vle-assignmentgraded-input.md</a></td><td><a href="recipes/universal-xapi-translator/vle-assignmentgraded-template.json">vle-assignmentgraded-template.json</a></td></td></tr>    
<tr><td> <a href =  "/recipes/vle/assignment-submitted.md">Assignment Submitted  </a></td><td><a href = "vle/moodle/assignment_submitted.json">Assignment submitted in Moodle</a><br/> <a href="vle/blackboard/assignment_submitted.json">Assignment submitted in Blackboard</a>   </td>  <td><a href="recipes/universal-xapi-translator/vle-assignmentsubmitted-input.md">vle-assignmentsubmitted-input.md</a></td><td><a href="recipes/universal-xapi-translator/vle-assignmentsubmitted-template.json">vle-assignmentsubmitted-template.json</a></td></tr>                                                             
<tr><td> <a href =  "/recipes/vle/forum.md">Forum post and reply</a></td><td>   </td> <td></td>  <td></td> </tr>                                                             
<tr><td> <a href =  "/recipes/vle/answered_questions.md">Quiz: Answered Questions</a></td><td>   </td> <td></td>  <td></td></tr>                                                             
<tr><td> <a href =  "/recipes/vle/quiz_completed.md">Quiz: Quiz Completed</a><td>   </td> <td></td>  <td></td></tr>                                                             
</table>

### All VLE Statement examples
* [Blackboard VLE samples](vle/blackboard/Examples.md)
* [Moodle VLE samples](vle/moodle/examples.md)

## Library
Library Reading List Statements: 

<table>
<tr><td>Statement Template</td><td>JSON example</td><td>Input TSV definitions</td><td>JSON Template</td></tr>                        
<tr><td><a href = "recipes/library/reading-list-view.md">Reading List: Viewed List</a></td><td></td><td></td><td></td></tr>             
<tr><td> <a href = "recipes/library/reading-list-item-view.md">Reading List: Viewed List Item</a></td><td></td> <td></td><td></td></tr>  
</table>

Library Borrowing and Access Statements: 
<table>
<tr><td>Statement Template</td><td>JSON example</td><td>Input TSV definitions</td><td>JSON Template</td></tr>  
<tr><td> <a href = "/recipes/library/econtent.md">Library Item Accessing econtent</a></td><td></td><td><a href="recipes/universal-xapi-translator/library-viewed-econtent-input.md">library-viewed-econtent-input.md</a></td><td><a href="recipes/universal-xapi-translator/library-viewed-econtent-template.json">library-viewed-econtent-template.json</a></td></tr>       <tr><td> <a href = "/recipes/library/library-item-borrowing.md">Library item: Borrowed item</a></td><td></td> <td><a href="recipes/universal-xapi-translator/library-item-borrowed-input.md">library-item-borrowed-input.md</a></td><td><a href="recipes/universal-xapi-translator/library-item-borrowed-template.json">library-item-template.json</td></tr>    
</table>

Library System Access Statements:

<table>
<tr><td>Statement Template</td><td>JSON example</td><td>Input TSV definitions</td><td>JSON Template</td></tr>  
<tr><td> <a href = "/recipes/library/login.md">Login to system</a></td><td>  </td> <td>   </td><td>   </td></tr>        
</table>

## Tracking App
<table>
<tr><td>Statement Template </td><td>JSON Example</td></tr>
<tr><td><a href = "recipes/studyapps/mobile-app.md">Mobile App content Viewed</a></td><td><a href = "recipes/studyapps/mobile-app.md#example">Mobile App content viewed</a></td> </tr>    
<tr><td><a href = "recipes/studyapps/target-set.md">Set a target</a></td>  <td>  </td></tr>
<tr><td><a href = "recipes/studyapps/target-recording-activity.md">Record an activity against a target</a> </td><td>  </td></tr>
<tr><td><a href = "recipes/studyapps/target-reached-completed.md">Reach a target</a></td><td> </td></tr>
<tr><td><a href = "recipes/studyapps/target-update.md">Post an update</a></td><td> </td></tr> 
</table>

## Presence and Attendance
<table>
<tr><td>Statement Template </td><td>JSON Example</td><td>Input TSV definitions</td><td>JSON Template</td></tr>
<tr><td> <a href = "recipes/attendance/attendance.md">Attended learning activity </a></td><td><a href = "recipes/attendance/attendance.md#example">Attended learning activity </a></td><td><a href="recipes/universal-xapi-translator/attendance-input.md"> attendance-input.md<a/></td> <td><a href="recipes/universal-xapi-translator/attendance-template.json">attendance-template.json</a></td>  </tr>    
</table>


## Predictive Model Output

<table>
<tr><td>Statement Template </td><td>JSON Example</td></tr>
<tr><td> <a href = "/lap/apereo/model_output.md">Predictive Model Alerting</a></td><td><a href = "/lap/apereo/model_output.js">Alerting JSON</a></td> </tr>    
</table>



# Deprecated Statements

- [Session timeout](/recipes/vle/Session-timeout.md)    

