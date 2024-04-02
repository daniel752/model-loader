#version 420 core

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;

out VS_OUT
{
    vec3 normal;
    mat4 projection;
} vs_out;

layout (std140, binding = 0) uniform Matrices
{
    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 projection;
};

uniform mat3 normalMat;

void main()
{
    vs_out.projection = projection;
    vs_out.normal = normalize(normalMat * aNormal);
    gl_Position = view * model * vec4(aPos, 1.0);
}