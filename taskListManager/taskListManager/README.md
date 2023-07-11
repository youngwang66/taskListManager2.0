# React Native Todo List App

This is a simple React Native app that allows you to create a todo list and view a profile screen. You can add tasks to the list, mark them as complete, and view dummy profile information.

## Setup

To run this project, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository to your local machine.
3. Open a terminal and navigate to the project directory.
4. Run `npm install` to install the project dependencies.
5. Run `npm start` to start the development server.
6. Scan the displayed QR code with the Expo app on your mobile device or use the available options to open the app on an emulator.

## Home Screen

The Home Screen is where you can manage your todo list. Here's how it works:

- Input a task in the provided text input field.
- Click the "Save" button or press Enter to add the task to the list.
- The added task will appear in the list below the input field.
- To mark a task as complete, tap on it in the list. The task will be removed from the list.
- You can continue adding tasks and marking them as complete as needed.

## Profile Screen

The Profile Screen displays dummy profile information. Please note that this information is only for testing the routing functionalities of the app. The details shown are not linked to any real user data.

## Camera Screen
The camera screen first will request camera permissions using Camera.requestPermissionsAsync() and store the result in the hasPermission state variable.
Then will use the cameraRef state variable to get a reference to the camera component.

Define the takePicture function, which captures a photo using the camera reference and calls the savePhoto function to save the photo to the media library and AsyncStorage.

In the savePhoto function, we first save the photo to the media library using MediaLibrary.createAssetAsync(). Then, we retrieve the previously stored photos from AsyncStorage, add the new photo URI to the array, and store the updated array back in AsyncStorage.

Render the camera preview and a capture button that calls the takePicture function.


## Technologies Used

- React Native
- Expo
- React Navigation

## License

This project is licensed under the [MIT License](LICENSE).

