# GreenTrack

This is an AI tool that would help automate the process of green building certification. 

1. We aim to use AI to validate and verify various parameters within the [GRIHA Standards](https://www.grihaindia.org/files/Manual_VolI.pdf)
2. We aim to demo the tool by automating the verification some of the parameters within the standard, particularly sustainable .

## The problem 

The green building certification process is: 

* Lengthy
* Expensive
* High in human effort

This leads to lesser adoption of green buildings. Our aim is to solve these challenges and incentivise green buildings using AI. 

## The solution  

Imagine an AI tool that would help various stakeholders in the green building certification process (builders, consultants, green building certification body, ULBs) quickly and efficiently verify compliance with GRIHA standards and claim the benefits. 



## How does this work ?

- This is a [worksheet](https://docs.google.com/spreadsheets/d/1ACInZjybHO91J53p1HrEaPxn8wKxdPAppkET2UgFlZw/edit?usp=sharing) that contains all the GRIHA parameters that need to validated once relevant documents are uploaded.
- We did some priliminary assessment of the feasibility of which parameters can be automated. Some of the document required for automation has also been identified and provided in the worksheet.

Here are some of the key steps we can get started with:
1. Builders/consultants will upload the necessary documents including photos, videos, invoices, site plans...etc 
2. Extract location details either from the files uploaded using OCR or directly upload the coordinates 
3. Detect old trees, minimum nos of trees,...etc in the site plan using vision AI
5. Use google map API or any OSM to say whether public facilities and amenities are present within the threshold
7. Use computer vision to analyse designated vehicular tracks for NMT vehicles 

## Next Commitments

We are looking for enthusiastic volunteers who can own pieces of this design puzzle. Please reach out to meghana@peopleplus.ai/vishnu@peopleplus.ai if you have expertise and/or interest in:

1. **Technical Architecture**: Build out these capabilities using machine learning.


## Questions?

If you have any queries/doubts or new ideas regarding this project please create an issue in this repo. Let's have a discussion! For any other queries, please reach out to [meghana](mailto:meghana@peopleplus.ai) 


Learn more about other [people+ai](https://peopleplus.ai/) initiatives.

## Contents

The source code for the following projects can be found in this repository:

- [Energy Rating Evaluator](./Energy%20Rating%20Evaluator)
- [Proximity Evaluator](./Proximity%20Evaluator)
- [Site Plan Analyzer](./Site%20Plan%20Analyzer)
