#version 460
#extension GL_EXT_nonuniform_qualifier : enable

layout(set = 2, binding = 0) uniform sampler2D samplerColor[];
layout(set = 2, binding = 1) uniform sampler2D samplerNormalMap[];

layout(location = 0) in vec4 fragWorldPos;
layout(location = 1) in vec3 fragNormal;
layout(location = 2) in vec3 fragTangent;
layout(location = 3) in vec2 fragUV;
layout(location = 4) flat in int fragInstance;

layout(location = 0) out vec4 outColor;

void main()
{
    // Calculate Normal in Tangent Space
	vec3 N = normalize(fragNormal);
	vec3 T = normalize(fragTangent);
	vec3 B = cross(N, T);
	mat3 TBN = mat3(T, B, N);
	vec3 tnorm = TBN * normalize(texture(samplerNormalMap[fragInstance], fragUV).xyz * 2.0 - vec3(1.0));
	vec4 tNormal = vec4(tnorm, 1.0);

	// Calculate Lighting
	vec3 result = vec3(0.0);
	//vec3 viewDir = normalize(shadingUBO.viewPos - fragPos);

	// Point Lights

	// Directional Lights

	// Spot Lights

	// Set Pixel Color
    //outColor = texture(samplerColor[fragInstance], fragUV);
	outColor.rgb = fragWorldPos.rgb;
	outColor.a = 1.0;
}