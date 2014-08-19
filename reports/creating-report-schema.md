1.  Begin with the end in mind

I want to understand what the document schema for a report will look like.

2.  Background research

http://docs.mongodb.org/manual/core/document/

3.  Background Thoughts

I am going to need an array of subdocuments
http://blog.mongolab.com/2013/04/thinking-about-arrays-in-mongodb/



4.  Execution

A.  Experiment 1
  {
    template: "feature",
    date: "8/18/14",
    title: "Creating a Report Document",
    research: [
      {
        heading: "Desired Outcome",
        content: "I want to understand how the document schema for a report will look."
        comments: [
          {
            author: "Michael",
            date: "8/18/14",
            content: "This is kind of fun."
          }
        ]
      },
      {
        heading: "Background Research",
        summary: "I am kind of winging this one."
        sources: [
          {
            date: "8/18/14",
            label: "Mongo docs on document"
            url: "http://docs.mongodb.org/manual/core/document/",
            commentary: "This document covers some of the basics of Mongo Documents"
          },
          {
            date: "8/18/14",
            label: "Blog post about arrays in Mongo.  Comments seem to offer a lot in the way of discussion about query performance for arrays in Mongo.  Discusses the idea of database normalization as the RDBMS model."
            url: "http://docs.mongodb.org/manual/core/document/",
          }
        }
        ]
      }
    ],
    experiments: [
      {
        label: "Experiment 1",
        summary: "I did some stuff, it should probably enumerate steps.",
        results: "This is what happened",
        status: "Failed",
        conclusion: "I believe this happened and why."
      },
      {
        label: "Experiment 2",
        summary: "I did some stuff, it should probably enumerate steps.",
        results: "This is what happened",
        status: "Success",
        conclusion: "I believe this happened and why."
      },  
    ]
  }