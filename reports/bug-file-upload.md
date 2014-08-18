#Formulation of a Question:
#A specification.
# For a bug, can I replicate? 

#(Define a question)

Do I have what I need to write a spec?
I need to go and figure out a way to make this work.  There is an attachment observer.  I think that when
  # config.action_mailer.delivery_method = :test is set, that email isn't even delivered to the console.

BAH, I just realized that it is not an email but rather a notification

Model spec:

attachment.to_s should render a human readable string.

#(Gather information and resources (observe))

[1] simply_civic »  Attachment.first.to_s
  Attachment Load (1.2ms)  SELECT `attachments`.* FROM `attachments` ORDER BY `attachments`.`id` ASC LIMIT 1
=> "#<AdditionalFile:0x0000000cb02230>"

#Form an Explanatory Hypothesis.

the to_s method is doing what it is supposed to be doing.  The problem is that I am calling the to_s method which is somewhat deprecated after the new FileUplaod code.  I commented it out during the development process for that feature.  I should be just be calling the attribute that I want to be rendering.

Now I have a new Problem:  by printing the file in the notification after the create, I am not going to actually know what the file name is because the filename is uploaded after the successful upload.  I think I need to define a new question.  OR SIMPLIFY BY GETTING RID OF THE FEATURE.  Let's see.

#(Test the hypothesis by performing an experiment and collecting data in a reproducible manner)

  message: "#{attachment.user.name} has uploaded a file for #{sr.property_address.to_s}. Label: \"#{attachment.description}\"",

#(Analyze the data)

Seemed to work.  Pushing to staging.

#(Interpret the data and draw conclusions that serve as a starting point for new hypothesis)

I pushed to staging. 

#("Publish Results")

I am going to go change the message actually, it has useless information.  But nothing really left but cosmetics.
