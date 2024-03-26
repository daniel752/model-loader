cmake_minimum_required(VERSION 3.12)

project(model_loading)

add_executable(main.o main.cpp glWindow.cpp camera.cpp mesh.cpp model.cpp shader.cpp stb_image.cpp directionalLight.cpp pointLight.cpp)

# Find required packages
find_package(GLEW REQUIRED)
find_package(glfw3 REQUIRED)
find_package(OpenGL REQUIRED)
find_package(assimp REQUIRED)

# Link your executable with the found packages
target_link_libraries(main.o PRIVATE 
    GLEW::GLEW
    glfw
    OpenGL::GL
    assimp
)