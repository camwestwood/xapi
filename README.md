# xAPI recipes for the Jisc Learning Analytics Project v0.6

## Repository Workflow
The simplest way of contributing xAPI recipes works as follows:

1. add an issue to the issue tracker to alert everyone to what you are working on and why
2. tag the issue with the version milestone you'd like the patch to be a part of
3. make an edit or add a file in this repository, and save it to your own branch. If you prefer, you can fork the whole repository and work in your own repository
4. send a pull request once you're done
5. the pull request will be discussed at our weekly meeting and either merged, or kept in the queue, depending on whether more work is required

You can do all this through the Github GUI, but you're welcome to use any other git tool you prefer.

If the need arises, particular versions will get their own branches, but until that time, everything is merged into the main branch. Releases will be made after the group has come to an agreement.

## Vocabulary and Common Structures

* [Vocabulary](vocabulary.md) gives the IRIs and definitions for verbs, activity types, etc, as well as for extensions used in the recipes.
* [Common Structures](common_structures.md) outlines common patterns used across different recipes.

# Statement Recipes
As far as possible all entities are the same across recipes and are identified by a version.

## VLE Statements

These are the currently platform independent documented recipes:

<table>
<tr><th align="left">Statement Recipe              </th><td>Example Statement                                     </td><td>Statement Generation Notes</td><td>Groupings</td></tr>
<tr><th align="left">[Logged in] (recipes/login.md)</th><td> [Logged In Moodle statement](vle/moodle/login.js)<br/>[Logged In Blackboard statement](vle/blackboard/loggedin.json)     </td><td>VLE Plugin                </td><td>           </td></tr>                                                           
<tr><th align="left">[Logged out] (recipes/logout.md)</th><td> [Logged Out Moodle statement](vle/moodle/logout.js) <br/> [Logged Out Blackboard statement](vle/blackboard/loggedout.json)    </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><th align="left">[VLE resource viewed] (recipes/Module-View.md)</th><td> [Moodle Module Viewed](vle/moodle/moduleview.js) <br/> [Blackboard Course Access](vle/blackboard/course_access.json)<br/> [Blackboard course_content_access.json](vle/blackboard/login.json)     </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><th align="left">[Session timeout] (recipes/Session-timeout.md)</th><td>[Blackboard session timeout statement](vle/blackboard/session_timeout.json)    </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><th align="left">[Assignment Graded] (recipes/assignment-graded.md)</th><td> [Assignment graded in Moodle](vle/moodle/assignment_graded.json) [Assignment submitted In Blackboard statement](vle/blackboard/assignment_submitted.json)   </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><th align="left">[Assignment Submitted] (recipes/assignment-submitted.md)</th><td> [Assignment submitted In Moodle](vle/moodle/assignment_submitted.json) <br/> [Assignment graded in Blackboard statement](vle/blackboard/assignment_graded.json)   </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><th align="left">[Attended learning activity](recipes/attendance.md)</th><td>  </td><td>VLE Plugin                </td><td>           </td></tr>    


</table>



### Specific VLE examples
* [Blackboard VLE samples] (vle/blackboard/Examples.md)
* [Moodle VLE samples] (vle/moodle/examples.md)

## Intervention Statements

* [Intervention recipe A](recipes/intervention/intervention_candidate_a.md)
* [Intervention recipe B](recipes/intervention/intervention_candidate_b.md)
* [Intervention recipe C](recipes/intervention/intervention_candidate_c.md)

## Physical Presence Statements
* [Physical presence ](recipes/physical_presence/physical_presence.md)
* [Physical presence (left)](recipes/physical_presence/physical_presence_leaving.md)

## Predictive Model Output
* [Alerting JSON] (/lap/apereo/model_output.js)
* [Alerting] (/lap/apereo/model_output.md)

## Statements In Draft
* [Library examples](https://github.com/jiscdev/xapi/tree/ds10-recipedev)(In development branch)

