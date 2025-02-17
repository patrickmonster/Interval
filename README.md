# interval-queue

`interval-queue`는 주기적으로 실행되는 작업을 관리하기 위한 유틸리티 라이브러리입니다. 이 라이브러리는 Node.js 환경에서 작동하며, 다양한 시간 단위로 작업을 예약하고 관리할 수 있습니다.

## 설치

```sh
npm install interval-queue
```
# 사용법
## 기본 사용법
```javascript
import { createInterval, deleteInterval, clearIntervals } from 'interval-queue';

// 1초마다 실행되는 작업 생성
const interval = createInterval(() => {
    console.log('1초마다 실행됩니다.');
}, 1000);

// 인터벌 삭제
deleteInterval(interval);

// 모든 인터벌 삭제
clearIntervals();
```
## 시간 단위 사용법
```javascript
import { createIntervalSecond, createIntervalMinute, createIntervalHour } from 'interval-queue';

// 1분마다 실행되는 작업 생성
const minuteInterval = createIntervalMinute(() => {
    console.log('1분마다 실행됩니다.');
}, 1);

// 1시간마다 실행되는 작업 생성
const hourInterval = createIntervalHour(() => {
    console.log('1시간마다 실행됩니다.');
}, 1);
```

API
createInterval(fn, time, ...args)
주어진 시간 간격으로 함수를 실행합니다.

- fn: 실행할 함수
- time: 실행 간격 (밀리초)
- ...args: 함수에 전달할 인수

`createIntervalSecond(fn, time, ...args)`

주어진 시간 간격(초)으로 함수를 실행합니다.

`createIntervalMinute(fn, time, ...args)`

주어진 시간 간격(분)으로 함수를 실행합니다.

`createIntervalHour(fn, time, ...args)`

주어진 시간 간격(시간)으로 함수를 실행합니다.

`deleteInterval(loop)`

주어진 인터벌을 삭제합니다.

`clearIntervals()`

모든 인터벌을 삭제합니다.


# 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 LICENSE를 참조하세요.