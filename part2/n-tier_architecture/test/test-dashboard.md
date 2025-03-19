# ENGCE301 Test case result.


| :clock10: Start time | :hourglass: Duration |
| --- | ---: |
|3/20/2025, 1:49:27 AM|3.348 s|

| | :white_check_mark: Passed | :x: Failed | :construction: Todo | :white_circle: Total |
| --- | ---: | ---: | ---:| ---: |
|Test Suites|6|0|-|6|
|Tests|18|0|0|18|

## __test__/endpoint-api/error.test.js [[link](https://github.com/mrwan2546/engce301-final/blob/8894a9a332f372726e78849bb3ee2309cc436009/part2/n-tier_architecture/test/__test__/endpoint-api/error.test.js)]

2 passed, 0 failed, 0 todo, done in 1.61 s

- :white_check_mark: should be invalid "Authorization" header
- :white_check_mark: should be incorrect "Authorization" header

## __test__/endpoint-api/hello.test.js [[link](https://github.com/mrwan2546/engce301-final/blob/8894a9a332f372726e78849bb3ee2309cc436009/part2/n-tier_architecture/test/__test__/endpoint-api/hello.test.js)]

1 passed, 0 failed, 0 todo, done in 2.02 s

- :white_check_mark: [Endpoint API] /
  - :white_check_mark: should return a successful response

## __test__/endpoint-api/login.test.js [[link](https://github.com/mrwan2546/engce301-final/blob/8894a9a332f372726e78849bb3ee2309cc436009/part2/n-tier_architecture/test/__test__/endpoint-api/login.test.js)]

4 passed, 0 failed, 0 todo, done in 3.13 s

- :white_check_mark: [Endpoint API] /api/v1/auth/login
  - :white_check_mark: should return a successful response
  - :white_check_mark: should return 400 HTTP status code (Invalid data field)
  - :white_check_mark: should return 404 HTTP status code (User not exist)
  - :white_check_mark: should return 401 HTTP status code (Enter wrong password)

## __test__/endpoint-api/logout.test.js [[link](https://github.com/mrwan2546/engce301-final/blob/8894a9a332f372726e78849bb3ee2309cc436009/part2/n-tier_architecture/test/__test__/endpoint-api/logout.test.js)]

3 passed, 0 failed, 0 todo, done in 2.594 s

- :white_check_mark: [Endpoint API] /api/v1/auth/logout
  - :white_check_mark: should return a successful response
  - :white_check_mark: should return 400 HTTP status code (Invalid header)
  - :white_check_mark: should return 400 HTTP status code (Token invalid)

## __test__/endpoint-api/postOnlineAgentStatus.test.js [[link](https://github.com/mrwan2546/engce301-final/blob/8894a9a332f372726e78849bb3ee2309cc436009/part2/n-tier_architecture/test/__test__/endpoint-api/postOnlineAgentStatus.test.js)]

4 passed, 0 failed, 0 todo, done in 2.791 s

- :white_check_mark: [Endpoint API] /api/v1/postOnlineAgentStatus
  - :white_check_mark: should return a successful response
  - :white_check_mark: should return 400 HTTP status code (Invalid header)
  - :white_check_mark: should return 400 HTTP status code (Invalid "AgentCode" field)
  - :white_check_mark: should return 400 HTTP status code (Token invalid)

## __test__/endpoint-api/postSendMessage.test.js [[link](https://github.com/mrwan2546/engce301-final/blob/8894a9a332f372726e78849bb3ee2309cc436009/part2/n-tier_architecture/test/__test__/endpoint-api/postSendMessage.test.js)]

4 passed, 0 failed, 0 todo, done in 2.995 s

- :white_check_mark: [Endpoint API] /api/v1/postSendMessage
  - :white_check_mark: should return a successful response
  - :white_check_mark: should return 400 HTTP status code (Invalid "ToAgentCode" field)
  - :white_check_mark: should return 400 HTTP status code (Invalid header)
  - :white_check_mark: should return 400 HTTP status code (Token invalid)

