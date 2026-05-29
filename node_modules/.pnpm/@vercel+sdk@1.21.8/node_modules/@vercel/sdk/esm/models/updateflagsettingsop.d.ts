import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Labels = {
    label: string;
    value: string;
};
export type Attributes = {
    key: string;
    type: string;
    labels?: Array<Labels> | undefined;
};
export type UpdateFlagSettingsEntities = {
    kind: string;
    label: string;
    attributes: Array<Attributes>;
};
export type UpdateFlagSettingsRequestBody = {
    enabled?: boolean | undefined;
    entities?: Array<UpdateFlagSettingsEntities> | undefined;
    /**
     * The environments to sync
     */
    environments?: Array<string> | undefined;
};
export type UpdateFlagSettingsRequest = {
    /**
     * The project id or name
     */
    projectIdOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateFlagSettingsRequestBody | undefined;
};
export declare const UpdateFlagSettingsFeatureFlagsTypeName: {
    readonly Settings: "settings";
};
export type UpdateFlagSettingsFeatureFlagsTypeName = ClosedEnum<typeof UpdateFlagSettingsFeatureFlagsTypeName>;
export type UpdateFlagSettingsFeatureFlagsConnections = {
    edgeConfigId: string;
    edgeConfigItemKey: string;
};
export type UpdateFlagSettingsFeatureFlagsLabels = {
    label: string;
    value: string;
};
export type UpdateFlagSettingsFeatureFlagsAttributes = {
    key: string;
    type: string;
    labels?: Array<UpdateFlagSettingsFeatureFlagsLabels> | undefined;
};
export type UpdateFlagSettingsFeatureFlagsResponseEntities = {
    kind: string;
    label: string;
    attributes: Array<UpdateFlagSettingsFeatureFlagsAttributes>;
};
export type UpdateFlagSettingsFeatureFlagsMetadata = {
    activeFlagCount: number;
    archivedFlagCount: number;
    segmentCount: number;
    packSizeInBytes: number;
    packRevision?: number | undefined;
    configUpdatedAt?: number | undefined;
};
/**
 * Syncs direct the synchronization of Flags to Edge Configs
 */
export type UpdateFlagSettingsFeatureFlagsResponseBody = {
    typeName: UpdateFlagSettingsFeatureFlagsTypeName;
    projectId: string;
    ownerId?: string | undefined;
    enabled: boolean;
    environments: Array<string>;
    connections?: Array<UpdateFlagSettingsFeatureFlagsConnections> | undefined;
    entities: Array<UpdateFlagSettingsFeatureFlagsResponseEntities>;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    metadata: UpdateFlagSettingsFeatureFlagsMetadata;
};
export declare const UpdateFlagSettingsTypeName: {
    readonly Settings: "settings";
};
export type UpdateFlagSettingsTypeName = ClosedEnum<typeof UpdateFlagSettingsTypeName>;
export type UpdateFlagSettingsConnections = {
    edgeConfigId: string;
    edgeConfigItemKey: string;
};
export type UpdateFlagSettingsLabels = {
    label: string;
    value: string;
};
export type UpdateFlagSettingsAttributes = {
    key: string;
    type: string;
    labels?: Array<UpdateFlagSettingsLabels> | undefined;
};
export type UpdateFlagSettingsFeatureFlagsEntities = {
    kind: string;
    label: string;
    attributes: Array<UpdateFlagSettingsAttributes>;
};
export type UpdateFlagSettingsMetadata = {
    activeFlagCount: number;
    archivedFlagCount: number;
    segmentCount: number;
    packSizeInBytes: number;
    packRevision?: number | undefined;
    configUpdatedAt?: number | undefined;
};
/**
 * Syncs direct the synchronization of Flags to Edge Configs
 */
export type UpdateFlagSettingsResponseBody = {
    typeName: UpdateFlagSettingsTypeName;
    projectId: string;
    ownerId?: string | undefined;
    enabled: boolean;
    environments: Array<string>;
    connections?: Array<UpdateFlagSettingsConnections> | undefined;
    entities: Array<UpdateFlagSettingsFeatureFlagsEntities>;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    metadata: UpdateFlagSettingsMetadata;
};
export type UpdateFlagSettingsResponse = UpdateFlagSettingsResponseBody | UpdateFlagSettingsFeatureFlagsResponseBody;
/** @internal */
export declare const Labels$inboundSchema: z.ZodType<Labels, z.ZodTypeDef, unknown>;
/** @internal */
export type Labels$Outbound = {
    label: string;
    value: string;
};
/** @internal */
export declare const Labels$outboundSchema: z.ZodType<Labels$Outbound, z.ZodTypeDef, Labels>;
export declare function labelsToJSON(labels: Labels): string;
export declare function labelsFromJSON(jsonString: string): SafeParseResult<Labels, SDKValidationError>;
/** @internal */
export declare const Attributes$inboundSchema: z.ZodType<Attributes, z.ZodTypeDef, unknown>;
/** @internal */
export type Attributes$Outbound = {
    key: string;
    type: string;
    labels?: Array<Labels$Outbound> | undefined;
};
/** @internal */
export declare const Attributes$outboundSchema: z.ZodType<Attributes$Outbound, z.ZodTypeDef, Attributes>;
export declare function attributesToJSON(attributes: Attributes): string;
export declare function attributesFromJSON(jsonString: string): SafeParseResult<Attributes, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsEntities$inboundSchema: z.ZodType<UpdateFlagSettingsEntities, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsEntities$Outbound = {
    kind: string;
    label: string;
    attributes: Array<Attributes$Outbound>;
};
/** @internal */
export declare const UpdateFlagSettingsEntities$outboundSchema: z.ZodType<UpdateFlagSettingsEntities$Outbound, z.ZodTypeDef, UpdateFlagSettingsEntities>;
export declare function updateFlagSettingsEntitiesToJSON(updateFlagSettingsEntities: UpdateFlagSettingsEntities): string;
export declare function updateFlagSettingsEntitiesFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsEntities, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsRequestBody$inboundSchema: z.ZodType<UpdateFlagSettingsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsRequestBody$Outbound = {
    enabled?: boolean | undefined;
    entities?: Array<UpdateFlagSettingsEntities$Outbound> | undefined;
    environments?: Array<string> | undefined;
};
/** @internal */
export declare const UpdateFlagSettingsRequestBody$outboundSchema: z.ZodType<UpdateFlagSettingsRequestBody$Outbound, z.ZodTypeDef, UpdateFlagSettingsRequestBody>;
export declare function updateFlagSettingsRequestBodyToJSON(updateFlagSettingsRequestBody: UpdateFlagSettingsRequestBody): string;
export declare function updateFlagSettingsRequestBodyFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsRequestBody, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsRequest$inboundSchema: z.ZodType<UpdateFlagSettingsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsRequest$Outbound = {
    projectIdOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateFlagSettingsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const UpdateFlagSettingsRequest$outboundSchema: z.ZodType<UpdateFlagSettingsRequest$Outbound, z.ZodTypeDef, UpdateFlagSettingsRequest>;
export declare function updateFlagSettingsRequestToJSON(updateFlagSettingsRequest: UpdateFlagSettingsRequest): string;
export declare function updateFlagSettingsRequestFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsTypeName$inboundSchema: z.ZodNativeEnum<typeof UpdateFlagSettingsFeatureFlagsTypeName>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsTypeName$outboundSchema: z.ZodNativeEnum<typeof UpdateFlagSettingsFeatureFlagsTypeName>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsConnections$inboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsConnections, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsFeatureFlagsConnections$Outbound = {
    edgeConfigId: string;
    edgeConfigItemKey: string;
};
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsConnections$outboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsConnections$Outbound, z.ZodTypeDef, UpdateFlagSettingsFeatureFlagsConnections>;
export declare function updateFlagSettingsFeatureFlagsConnectionsToJSON(updateFlagSettingsFeatureFlagsConnections: UpdateFlagSettingsFeatureFlagsConnections): string;
export declare function updateFlagSettingsFeatureFlagsConnectionsFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsFeatureFlagsConnections, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsLabels$inboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsLabels, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsFeatureFlagsLabels$Outbound = {
    label: string;
    value: string;
};
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsLabels$outboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsLabels$Outbound, z.ZodTypeDef, UpdateFlagSettingsFeatureFlagsLabels>;
export declare function updateFlagSettingsFeatureFlagsLabelsToJSON(updateFlagSettingsFeatureFlagsLabels: UpdateFlagSettingsFeatureFlagsLabels): string;
export declare function updateFlagSettingsFeatureFlagsLabelsFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsFeatureFlagsLabels, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsAttributes$inboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsAttributes, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsFeatureFlagsAttributes$Outbound = {
    key: string;
    type: string;
    labels?: Array<UpdateFlagSettingsFeatureFlagsLabels$Outbound> | undefined;
};
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsAttributes$outboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsAttributes$Outbound, z.ZodTypeDef, UpdateFlagSettingsFeatureFlagsAttributes>;
export declare function updateFlagSettingsFeatureFlagsAttributesToJSON(updateFlagSettingsFeatureFlagsAttributes: UpdateFlagSettingsFeatureFlagsAttributes): string;
export declare function updateFlagSettingsFeatureFlagsAttributesFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsFeatureFlagsAttributes, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsResponseEntities$inboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsResponseEntities, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsFeatureFlagsResponseEntities$Outbound = {
    kind: string;
    label: string;
    attributes: Array<UpdateFlagSettingsFeatureFlagsAttributes$Outbound>;
};
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsResponseEntities$outboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsResponseEntities$Outbound, z.ZodTypeDef, UpdateFlagSettingsFeatureFlagsResponseEntities>;
export declare function updateFlagSettingsFeatureFlagsResponseEntitiesToJSON(updateFlagSettingsFeatureFlagsResponseEntities: UpdateFlagSettingsFeatureFlagsResponseEntities): string;
export declare function updateFlagSettingsFeatureFlagsResponseEntitiesFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsFeatureFlagsResponseEntities, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsMetadata$inboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsFeatureFlagsMetadata$Outbound = {
    activeFlagCount: number;
    archivedFlagCount: number;
    segmentCount: number;
    packSizeInBytes: number;
    packRevision?: number | undefined;
    configUpdatedAt?: number | undefined;
};
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsMetadata$outboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsMetadata$Outbound, z.ZodTypeDef, UpdateFlagSettingsFeatureFlagsMetadata>;
export declare function updateFlagSettingsFeatureFlagsMetadataToJSON(updateFlagSettingsFeatureFlagsMetadata: UpdateFlagSettingsFeatureFlagsMetadata): string;
export declare function updateFlagSettingsFeatureFlagsMetadataFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsFeatureFlagsMetadata, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsResponseBody$inboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsFeatureFlagsResponseBody$Outbound = {
    typeName: string;
    projectId: string;
    ownerId?: string | undefined;
    enabled: boolean;
    environments: Array<string>;
    connections?: Array<UpdateFlagSettingsFeatureFlagsConnections$Outbound> | undefined;
    entities: Array<UpdateFlagSettingsFeatureFlagsResponseEntities$Outbound>;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    metadata: UpdateFlagSettingsFeatureFlagsMetadata$Outbound;
};
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsResponseBody$outboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsResponseBody$Outbound, z.ZodTypeDef, UpdateFlagSettingsFeatureFlagsResponseBody>;
export declare function updateFlagSettingsFeatureFlagsResponseBodyToJSON(updateFlagSettingsFeatureFlagsResponseBody: UpdateFlagSettingsFeatureFlagsResponseBody): string;
export declare function updateFlagSettingsFeatureFlagsResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsFeatureFlagsResponseBody, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsTypeName$inboundSchema: z.ZodNativeEnum<typeof UpdateFlagSettingsTypeName>;
/** @internal */
export declare const UpdateFlagSettingsTypeName$outboundSchema: z.ZodNativeEnum<typeof UpdateFlagSettingsTypeName>;
/** @internal */
export declare const UpdateFlagSettingsConnections$inboundSchema: z.ZodType<UpdateFlagSettingsConnections, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsConnections$Outbound = {
    edgeConfigId: string;
    edgeConfigItemKey: string;
};
/** @internal */
export declare const UpdateFlagSettingsConnections$outboundSchema: z.ZodType<UpdateFlagSettingsConnections$Outbound, z.ZodTypeDef, UpdateFlagSettingsConnections>;
export declare function updateFlagSettingsConnectionsToJSON(updateFlagSettingsConnections: UpdateFlagSettingsConnections): string;
export declare function updateFlagSettingsConnectionsFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsConnections, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsLabels$inboundSchema: z.ZodType<UpdateFlagSettingsLabels, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsLabels$Outbound = {
    label: string;
    value: string;
};
/** @internal */
export declare const UpdateFlagSettingsLabels$outboundSchema: z.ZodType<UpdateFlagSettingsLabels$Outbound, z.ZodTypeDef, UpdateFlagSettingsLabels>;
export declare function updateFlagSettingsLabelsToJSON(updateFlagSettingsLabels: UpdateFlagSettingsLabels): string;
export declare function updateFlagSettingsLabelsFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsLabels, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsAttributes$inboundSchema: z.ZodType<UpdateFlagSettingsAttributes, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsAttributes$Outbound = {
    key: string;
    type: string;
    labels?: Array<UpdateFlagSettingsLabels$Outbound> | undefined;
};
/** @internal */
export declare const UpdateFlagSettingsAttributes$outboundSchema: z.ZodType<UpdateFlagSettingsAttributes$Outbound, z.ZodTypeDef, UpdateFlagSettingsAttributes>;
export declare function updateFlagSettingsAttributesToJSON(updateFlagSettingsAttributes: UpdateFlagSettingsAttributes): string;
export declare function updateFlagSettingsAttributesFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsAttributes, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsEntities$inboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsEntities, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsFeatureFlagsEntities$Outbound = {
    kind: string;
    label: string;
    attributes: Array<UpdateFlagSettingsAttributes$Outbound>;
};
/** @internal */
export declare const UpdateFlagSettingsFeatureFlagsEntities$outboundSchema: z.ZodType<UpdateFlagSettingsFeatureFlagsEntities$Outbound, z.ZodTypeDef, UpdateFlagSettingsFeatureFlagsEntities>;
export declare function updateFlagSettingsFeatureFlagsEntitiesToJSON(updateFlagSettingsFeatureFlagsEntities: UpdateFlagSettingsFeatureFlagsEntities): string;
export declare function updateFlagSettingsFeatureFlagsEntitiesFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsFeatureFlagsEntities, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsMetadata$inboundSchema: z.ZodType<UpdateFlagSettingsMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsMetadata$Outbound = {
    activeFlagCount: number;
    archivedFlagCount: number;
    segmentCount: number;
    packSizeInBytes: number;
    packRevision?: number | undefined;
    configUpdatedAt?: number | undefined;
};
/** @internal */
export declare const UpdateFlagSettingsMetadata$outboundSchema: z.ZodType<UpdateFlagSettingsMetadata$Outbound, z.ZodTypeDef, UpdateFlagSettingsMetadata>;
export declare function updateFlagSettingsMetadataToJSON(updateFlagSettingsMetadata: UpdateFlagSettingsMetadata): string;
export declare function updateFlagSettingsMetadataFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsMetadata, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsResponseBody$inboundSchema: z.ZodType<UpdateFlagSettingsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsResponseBody$Outbound = {
    typeName: string;
    projectId: string;
    ownerId?: string | undefined;
    enabled: boolean;
    environments: Array<string>;
    connections?: Array<UpdateFlagSettingsConnections$Outbound> | undefined;
    entities: Array<UpdateFlagSettingsFeatureFlagsEntities$Outbound>;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    metadata: UpdateFlagSettingsMetadata$Outbound;
};
/** @internal */
export declare const UpdateFlagSettingsResponseBody$outboundSchema: z.ZodType<UpdateFlagSettingsResponseBody$Outbound, z.ZodTypeDef, UpdateFlagSettingsResponseBody>;
export declare function updateFlagSettingsResponseBodyToJSON(updateFlagSettingsResponseBody: UpdateFlagSettingsResponseBody): string;
export declare function updateFlagSettingsResponseBodyFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsResponseBody, SDKValidationError>;
/** @internal */
export declare const UpdateFlagSettingsResponse$inboundSchema: z.ZodType<UpdateFlagSettingsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFlagSettingsResponse$Outbound = UpdateFlagSettingsResponseBody$Outbound | UpdateFlagSettingsFeatureFlagsResponseBody$Outbound;
/** @internal */
export declare const UpdateFlagSettingsResponse$outboundSchema: z.ZodType<UpdateFlagSettingsResponse$Outbound, z.ZodTypeDef, UpdateFlagSettingsResponse>;
export declare function updateFlagSettingsResponseToJSON(updateFlagSettingsResponse: UpdateFlagSettingsResponse): string;
export declare function updateFlagSettingsResponseFromJSON(jsonString: string): SafeParseResult<UpdateFlagSettingsResponse, SDKValidationError>;
//# sourceMappingURL=updateflagsettingsop.d.ts.map