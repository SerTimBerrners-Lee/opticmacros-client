# OpticMacros

<p align="center">
  <img src="https://optimacros.com/wp-content/uploads/2019/12/optimacros-logo.png" alt="Логотип">
</p>

OpticMacros - это приложение, состоящее из серверной и клиентской частей, предназначенное для управления базой данных автомобилей. Серверная часть предоставляет REST API для выполнения операций CRUD (создание, чтение, обновление, удаление) над автомобилями, а клиентская часть представляет собой CLI (интерфейс командной строки), который позволяет взаимодействовать с сервером.

## Технологии

- **Клиент**: Node.js, Commander.js.

## Установка и Запуск

### Сервер

Перед запуском убедитесь, что у вас установлены Node.js и MongoDB.

1. Клонируйте репозиторий:

   ```bash
   git clone [URL репозитория]
   ```

2. Перейдите в директорию сервера и установите зависимости:

   ```bash
   cd opticmacros
   npm install
   ```

3. Запустите сервер:

   - В режиме разработки:

     ```bash
     npm run start:dev
     ```

   - В продакшн режиме:

     ```bash
     npm run build
     npm run start:prod
     ```

### Клиент

1. Перейдите в директорию клиента и установите зависимости:

   ```bash
   cd opticmacros-client
   npm install
   ```

2. Запустите клиентское приложение:

   ```bash
	 npm run build
   npm run start:prod
   ```

## Использование

После запуска клиентского приложения вы можете использовать различные команды для взаимодействия с сервером, такие как:

Логин и пароль для авторизации: root 1234OMG

- `auth <login> <password>`: Авторизация пользователя.
- `get-cars`: Получение списка автомобилей.
- `add-car -b <brand> -m <model> -y <year> -p <price>`: Добавление нового автомобиля.
- `update-car <carId> -b <brand> -m <model> -y <year> -p <price>`: Обновление данных автомобиля.
- `delete-car <carId>`: Удаление автомобиля.

## Тестирование

Для запуска тестов перейдите в директорию сервера и выполните команду:

```bash
npm test
```