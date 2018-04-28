# Эпизод Экстремального Программирования на typescript и FuseBox

Эпизод Экстремального Программирования — это статья-пример написания небольшого приложения с использованием принципов [TDD](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5) и [парного программирования](https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D1%80%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5).

Они пишут тест, затем пишут **минимум** кода для прохождения теста. Это защита от перепроектирования. Архитектура приложения проявляется в ходе тестирования. После прохождения теста делают [рефакторинг](https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%84%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B3).

* [Перевод статьи на русский](http://xp.1024.info/Articles/XPEpisode.html) ([копия в веб-архиве](https://web.archive.org/web/20170927102142/http://xp.1024.info:80/Articles/XPEpisode.html))
* [Оригинал на английском](https://web.archive.org/web/20020217210202/http://www.objectmentor.com/resources/articles/xpepisode.htm)

## Этот репозиторий

Весь код из статьи последовательно пишется на тайпскрипте с использованием бандлера [FuseBox](https://fuse-box.org/).

### Установка

```sh
git clone https://github.com/pongo/xpepisode_fuse.git
cd xpepisode_fuse
npm install
```

### Запуск тестов

```sh
npm test
npm run test-watch
```

`test-watch` — перезапускает тесты при изменении кода.