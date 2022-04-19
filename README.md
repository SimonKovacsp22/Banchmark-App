# Designing our application
### Main HTML elements
-
-
-
-
### Main CSS styles
-
-
-
-
-
### Main JS functionalities
(1)load page 
- Show HTML and CSS of first page

(2) click on PROCEED button 
- Hide text in <div> id="welcome-page-text" <div> with checkbox and PROCEED button
- Proceed to first question (only if the check box is marked 'checked')
- Show Question <div>, Show buttons with answers <div>, timer(start countdown), footer with question counter

(3) select answer by clicking on one of the buttons
- Selected button changes color
- Submit button appears
- By selecting different button -> deselect the initially selected one, submit button stays selected
- *If time runs out* proceed to next question as if submit was clicked

(4) submit button onclick -> proceed to next question *new question <div>, new buttons <div>*
- Evaluate based on selected answer -> *if correct ans selected* cAC +=1 otherwise iAC +=1
- Reset Timer
- Increase question count in the bottom
- repeat until last question

 (5) submit button onclick  
 - *If this is a last question* everything except epicode logo goes hidden
 - Dislplay results div with picture and text + title
 - Display percentages of cAC/10 and iAC/10
 - Display RATE US button

 (6) rate button onclick 
 - Everything except epicode logo goes hidden
 - Show title,text, 10 stars, text box and MORE INFO button

 (7) star onclick
 - change bg-color on all previous stars to the left the clicked star included