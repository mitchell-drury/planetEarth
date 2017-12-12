# planetEarth

Project requirements: Node, NPM, 

To run project:
1. Clone this git repo.
2. NPM install
3. NPM run createdb
4. NPM run seed
5. NPM run start-dev

project should be visible in the browser at localhost:3000


Not much to really look at here obviously. Mainly I was setting up routes to query the database which would store info for Kingdom, Phylum, etc.

I created the association for kingdom and phylum, further associations will follow down to the species level.

Currently debugging the kingdom component. On mount it is not hitting the correct api route, and thus not rendering the select list appropriately.

The goal would be to have a select list for each sub category of classification and the list of organisms would be appropriately sorted each time a user changes one of those. 

It took a while to get a boilerplate going. I haven't used too many actually other than a fairly minimal one that I have used personnaly.

