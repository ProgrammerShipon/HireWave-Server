# HireWave-Server

## Using Package

- morgan ( Client Calling Route Show )
- body-parser
- http-error
- xss-clean ( middleware - Client Request handle, express rate limit )
- .env

<hr>

## File Structure

- MVC Architecture Setup

#### Folder Structure - Example

    => index.js
    => public
    => src
        -> app.js
        -> secret.js
        -> config
            db.js ( database connections )
        -> collections
            user collections || all collections
        -> controller
            userController
        -> modules
            userModules
        -> routers
            api/user

## Collaborators

### Shipon Hossen Raju

<article>
<p>Testing Route :
<a> http://localhost:3030/ </a>
 </p>
</article>

<hr>
  
## -> APIs
  - Jobs Data routes apis
      - All Jobs 
          - http://localhost:3030/api/allJobs
      - Single Jobs Route 
          - http://localhost:3030/api/allJobs/:id

<br>

- Candidates Data routes apis
  - send Candidates data
    - { method: post }
    - body -> { key: value }
    - http://localhost:3030/api/candidate
  - All Candidates
    - { method: get }
    - http://localhost:3030/api/candidate
  - Single Candidates Data
    - { method: get }
    - http://localhost:3030/api/candidate/:id
  - Single Candidates Delete Data
    - { method: delete }
    - http://localhost:3030/api/candidate/:id
  - Single Candidates Update Data
    - { method: patch }
    - body -> { key: value }
    - http://localhost:3030/api/candidate/:id

<br>

- Recruiters Data routes apis

  - send Recruiters data
    - { method: post }
    - body -> { key: value }
    - http://localhost:3030/api/recruiters
  - Send Recruiters Lot of Data
    - { method: post }
    - body -> [{ key: value }]
    - http://localhost:3030/api/recruiters/Many
  - get All Recruiters data
    - { method: get }
    - http://localhost:3030/api/recruiters
  - Single Recruiters Data
    - { method: get }
    - http://localhost:3030/api/recruiters/:id
  - Single Recruiters Delete Data
    - { method: delete }
    - http://localhost:3030/api/recruiters/:id
  - Single Recruiters Update Data
    - { method: patch }
    - body -> { key: value }
    - http://localhost:3030/api/recruiters/:id

<br>

- User Data routes apis
  - send User data
    - { method: post }
    - body -> { key: value }
    - http://localhost:3030/api/users
  - Send User Lot of Data or single
    - { method: post }
    - body -> [{ key: value }]
    - http://localhost:3030/api/users/Many
  - get All User data
    - { method: get }
    - http://localhost:3030/api/users
  - Single User Data
    - { method: get }
    - http://localhost:3030/api/users/:id
  - Single User Delete Data
    - { method: delete }
    - http://localhost:3030/api/users/:id
  - Single User Update Data
    - { method: patch }
    - body -> { key: value }
    - http://localhost:3030/api/users/:id

<br>

- Review Data routes apis
  - send Review data
    - { method: post }
    - body -> { key: value }
    - http://localhost:3030/api/review
  - Send Review Lot of Data or single
    - { method: post }
    - body -> [{ key: value }]
    - http://localhost:3030/api/review/Many
  - get All Review data
    - { method: get }
    - http://localhost:3030/api/review
  - Single Review Data
    - { method: get }
    - http://localhost:3030/api/review/:id
  - Single Review Delete Data
    - { method: delete }
    - http://localhost:3030/api/review/:id
  - Single Review Update Data
    - { method: patch }
    - body -> { key: value }
    - http://localhost:3030/api/review/:id

<br>

- Learning Data routes apis
  - send Learning data
    - { method: post }
    - body -> { key: value }
    - http://localhost:3030/api/learning
  - Send Learning Lot of Data or single
    - { method: post }
    - body -> [{ key: value }]
    - http://localhost:3030/api/learning/Many
  - get All Learning data
    - { method: get }
    - http://localhost:3030/api/learning
  - Single Learning Data
    - { method: get }
    - http://localhost:3030/api/learning/:id
  - Single Learning Delete Data
    - { method: delete }
    - http://localhost:3030/api/learning/:id
  - Single Learning Update Data
    - { method: patch }
    - body -> { key: value }
    - http://localhost:3030/api/learning/:id

 <hr>
