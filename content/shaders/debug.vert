#version 460

layout(set = 0, binding = 0) uniform CameraData
{
	mat4 viewProj;
} camera;

layout(location = 0) in vec3 inPos;
layout(location = 1) in vec3 inColor;

layout(location = 0) out vec4 fragColor;

void main()
{
	fragColor = vec4(inColor, 1.0);

	gl_Position = camera.viewProj * vec4(inPos, 1.0);
}