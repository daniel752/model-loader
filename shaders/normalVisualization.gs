#version 420 core

layout(triangles) in;
layout(line_strip, max_vertices = 3) out;

in VS_OUT
{
    vec3 normal;
    mat4 projection;
} gs_in[];

const float MAGNITUDE = 0.2;

// uniform mat4 projection;
uniform bool showingNormals;

void generateNormalLine(int index)
{
    gl_Position = gs_in[index].projection * gl_in[index].gl_Position;
    EmitVertex();

    gl_Position = gs_in[index].projection * (gl_in[index].gl_Position + vec4(gs_in[index].normal, 0.0) * MAGNITUDE);
    EmitVertex();
    EndPrimitive();
}

void main()
{
    if(showingNormals)
    {
        generateNormalLine(0);
        generateNormalLine(1);
        generateNormalLine(2);
    }
    else
    {
        EmitVertex();
        EmitVertex();
        EmitVertex();
        EndPrimitive();
    }
}