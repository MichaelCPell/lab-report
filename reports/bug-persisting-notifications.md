#Section: (Can I replicate?  Do I understand?)

Dan Hensley: test.simplycivicapp.com
Dan Hensley: greenvillereviewer@simplycivic.com (pw: demo1234)
Dan Hensley: #757 (234 N Federal Lands) and #229 (4959 S Residential Way)


ServiceRequest.find(757)
user = User.find_by(email: "greenvillereviewer@simplycivic.com")

viewing = Viewing.find(12639)

Scoring Analysis and Report Viewing 12639

 => #<Viewing id: 12639, user_id: 22, notification_id: 6148, state: "read", created_at: "2014-05-11 18:57:18", updated_at: "2014-05-11 18:58:25"> 

 It is showing up as read.  Let's see what the display class is. "task-incomplete" which is correct.

 2.1.0 :012 > Notification.find(6148)  
 => #<Notification id: 6148, notifiable_type: "Task", notifiable_id: 4584, message: "You have been assigned a task!", created_at: "2014-05-11 18:57:18", updated_at: "2014-05-11 18:57:18", code: "task_assignment"> 
2.1.0 :013 > task = Task.find(4584) 
 => #<Task id: 4584, service_request_id: 757, checklist_item_id: 99, user_id: 22, complete: false, created_at: "2014-02-04 17:50:36", updated_at: "2014-07-21 01:14:04", assigner_id: 20, accepter_id: nil, description: "Scoping Analysis and Report", completed_at: nil> 

 Everything continues to make sense.  This is a bug in the design itself.

#Section (Form an explanatory hypothesis)

I think the code in TaskViewing is designed poorly, so that tasks that are associated with service requests are not actually running properly.   The ordering of the if else statement causes the label to be set as if the task can still be completed, even though it cannot.


#Section (Form a solution hypothesis)

I can reorganize the elsif statement to put the potential classes in the appropriate order.

#Section (Results)

Seems to work well enough 

#Section (Brainstorm Weaknesses)

