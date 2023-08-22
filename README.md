## Вебинар 21.08.2023

Ключевой вопрос, который я оставил вне вебинара - отличие `.forRoot` и `.register` в модулях.

## Вкратце

Самый правильный ответ: смотрите документацию по каждому модулю конкретно.

## Почему?

Методы модуля `.forRoot`, `.register` и прочие - не часть архитектуры nest. 
Базовое обращение с модулем - указать его в настройках другого без вызова методов

```typescript
@Module({
    imports: [
        CustomModule,
    ],
})
```

Всё остальное уже дорабатывают разработчики. Пример такой доработки: https://docs.nestjs.com/modules#dynamic-modules
Разработчик сам создал метод и придумал его поведение

## В готовых модулях

https://docs.nestjs.com/fundamentals/dynamic-modules#community-guidelines

> You may have seen the use for methods like forRoot, register, and forFeature around some of the @nestjs/ packages and may be wondering what the difference for all of these methods are. There is no hard rule about this ...

Точнее: 

> There is no hard rule about this

В разделе по ссылке указано различие, которого разработчики стараются придерживаться. Но возможно найдётся разработчик, который будет этим пренебрегать.

В базе nest я не нашёл модуля, у которого есть одновременно `.register` и `.forRoot`.