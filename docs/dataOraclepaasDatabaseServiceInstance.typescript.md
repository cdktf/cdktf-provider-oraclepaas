# `data_oraclepaas_database_service_instance`

Refer to the Terraform Registory for docs: [`data_oraclepaas_database_service_instance`](https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance).

# `dataOraclepaasDatabaseServiceInstance` Submodule <a name="`dataOraclepaasDatabaseServiceInstance` Submodule" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOraclepaasDatabaseServiceInstance <a name="DataOraclepaasDatabaseServiceInstance" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance oraclepaas_database_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer"></a>

```typescript
import { dataOraclepaasDatabaseServiceInstance } from '@cdktf/provider-oraclepaas'

new dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance(scope: Construct, id: string, config: DataOraclepaasDatabaseServiceInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig">DataOraclepaasDatabaseServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig">DataOraclepaasDatabaseServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOraclepaasDatabaseServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct"></a>

```typescript
import { dataOraclepaasDatabaseServiceInstance } from '@cdktf/provider-oraclepaas'

dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement"></a>

```typescript
import { dataOraclepaasDatabaseServiceInstance } from '@cdktf/provider-oraclepaas'

dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource"></a>

```typescript
import { dataOraclepaasDatabaseServiceInstance } from '@cdktf/provider-oraclepaas'

dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport"></a>

```typescript
import { dataOraclepaasDatabaseServiceInstance } from '@cdktf/provider-oraclepaas'

dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOraclepaasDatabaseServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOraclepaasDatabaseServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOraclepaasDatabaseServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOraclepaasDatabaseServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.apexUrl">apexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.backupDestination">backupDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.bringYourOwnLicense">bringYourOwnLicense</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cloudStorageContainer">cloudStorageContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.computeSiteName">computeSiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.enterpriseManagerUrl">enterpriseManagerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.failoverDatabase">failoverDatabase</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.glassfishUrl">glassfishUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.highPerformanceStorage">highPerformanceStorage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.hybridDisasterRecoveryIp">hybridDisasterRecoveryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.identityDomain">identityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipNetwork">ipNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipReservations">ipReservations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.monitorUrl">monitorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.pluggableDatabaseName">pluggableDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `apexUrl`<sup>Required</sup> <a name="apexUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.apexUrl"></a>

```typescript
public readonly apexUrl: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `backupDestination`<sup>Required</sup> <a name="backupDestination" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.backupDestination"></a>

```typescript
public readonly backupDestination: string;
```

- *Type:* string

---

##### `bringYourOwnLicense`<sup>Required</sup> <a name="bringYourOwnLicense" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.bringYourOwnLicense"></a>

```typescript
public readonly bringYourOwnLicense: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `cloudStorageContainer`<sup>Required</sup> <a name="cloudStorageContainer" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.cloudStorageContainer"></a>

```typescript
public readonly cloudStorageContainer: string;
```

- *Type:* string

---

##### `computeSiteName`<sup>Required</sup> <a name="computeSiteName" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.computeSiteName"></a>

```typescript
public readonly computeSiteName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `enterpriseManagerUrl`<sup>Required</sup> <a name="enterpriseManagerUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.enterpriseManagerUrl"></a>

```typescript
public readonly enterpriseManagerUrl: string;
```

- *Type:* string

---

##### `failoverDatabase`<sup>Required</sup> <a name="failoverDatabase" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.failoverDatabase"></a>

```typescript
public readonly failoverDatabase: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `glassfishUrl`<sup>Required</sup> <a name="glassfishUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.glassfishUrl"></a>

```typescript
public readonly glassfishUrl: string;
```

- *Type:* string

---

##### `highPerformanceStorage`<sup>Required</sup> <a name="highPerformanceStorage" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.highPerformanceStorage"></a>

```typescript
public readonly highPerformanceStorage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hybridDisasterRecoveryIp`<sup>Required</sup> <a name="hybridDisasterRecoveryIp" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.hybridDisasterRecoveryIp"></a>

```typescript
public readonly hybridDisasterRecoveryIp: string;
```

- *Type:* string

---

##### `identityDomain`<sup>Required</sup> <a name="identityDomain" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.identityDomain"></a>

```typescript
public readonly identityDomain: string;
```

- *Type:* string

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipNetwork"></a>

```typescript
public readonly ipNetwork: string;
```

- *Type:* string

---

##### `ipReservations`<sup>Required</sup> <a name="ipReservations" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.ipReservations"></a>

```typescript
public readonly ipReservations: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `monitorUrl`<sup>Required</sup> <a name="monitorUrl" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.monitorUrl"></a>

```typescript
public readonly monitorUrl: string;
```

- *Type:* string

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nationalCharacterSet"></a>

```typescript
public readonly nationalCharacterSet: string;
```

- *Type:* string

---

##### `pluggableDatabaseName`<sup>Required</sup> <a name="pluggableDatabaseName" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.pluggableDatabaseName"></a>

```typescript
public readonly pluggableDatabaseName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOraclepaasDatabaseServiceInstanceConfig <a name="DataOraclepaasDatabaseServiceInstanceConfig" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.Initializer"></a>

```typescript
import { dataOraclepaasDatabaseServiceInstance } from '@cdktf/provider-oraclepaas'

const dataOraclepaasDatabaseServiceInstanceConfig: dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#name DataOraclepaasDatabaseServiceInstance#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#id DataOraclepaasDatabaseServiceInstance#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#name DataOraclepaasDatabaseServiceInstance#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.dataOraclepaasDatabaseServiceInstance.DataOraclepaasDatabaseServiceInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/data-sources/database_service_instance#id DataOraclepaasDatabaseServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



