# `databaseAccessRule` Submodule <a name="`databaseAccessRule` Submodule" id="@cdktf/provider-oraclepaas.databaseAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAccessRule <a name="DatabaseAccessRule" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule oraclepaas_database_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer"></a>

```typescript
import { databaseAccessRule } from '@cdktf/provider-oraclepaas'

new databaseAccessRule.DatabaseAccessRule(scope: Construct, id: string, config: DatabaseAccessRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig">DatabaseAccessRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig">DatabaseAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseAccessRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isConstruct"></a>

```typescript
import { databaseAccessRule } from '@cdktf/provider-oraclepaas'

databaseAccessRule.DatabaseAccessRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformElement"></a>

```typescript
import { databaseAccessRule } from '@cdktf/provider-oraclepaas'

databaseAccessRule.DatabaseAccessRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformResource"></a>

```typescript
import { databaseAccessRule } from '@cdktf/provider-oraclepaas'

databaseAccessRule.DatabaseAccessRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.generateConfigForImport"></a>

```typescript
import { databaseAccessRule } from '@cdktf/provider-oraclepaas'

databaseAccessRule.DatabaseAccessRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseAccessRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference">DatabaseAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.portsInput">portsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.serviceInstanceIdInput">serviceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.ports">ports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.serviceInstanceId">serviceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAccessRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference">DatabaseAccessRuleTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.portsInput"></a>

```typescript
public readonly portsInput: string;
```

- *Type:* string

---

##### `serviceInstanceIdInput`<sup>Optional</sup> <a name="serviceInstanceIdInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.serviceInstanceIdInput"></a>

```typescript
public readonly serviceInstanceIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseAccessRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.ports"></a>

```typescript
public readonly ports: string;
```

- *Type:* string

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.serviceInstanceId"></a>

```typescript
public readonly serviceInstanceId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAccessRuleConfig <a name="DatabaseAccessRuleConfig" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.Initializer"></a>

```typescript
import { databaseAccessRule } from '@cdktf/provider-oraclepaas'

const databaseAccessRuleConfig: databaseAccessRule.DatabaseAccessRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#description DatabaseAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#name DatabaseAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.ports">ports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#ports DatabaseAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.serviceInstanceId">serviceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#service_instance_id DatabaseAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#source DatabaseAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#destination DatabaseAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#enabled DatabaseAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#id DatabaseAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#description DatabaseAccessRule#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#name DatabaseAccessRule#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.ports"></a>

```typescript
public readonly ports: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#ports DatabaseAccessRule#ports}.

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.serviceInstanceId"></a>

```typescript
public readonly serviceInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#service_instance_id DatabaseAccessRule#service_instance_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#source DatabaseAccessRule#source}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#destination DatabaseAccessRule#destination}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#enabled DatabaseAccessRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#id DatabaseAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAccessRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#timeouts DatabaseAccessRule#timeouts}

---

### DatabaseAccessRuleTimeouts <a name="DatabaseAccessRuleTimeouts" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.Initializer"></a>

```typescript
import { databaseAccessRule } from '@cdktf/provider-oraclepaas'

const databaseAccessRuleTimeouts: databaseAccessRule.DatabaseAccessRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#create DatabaseAccessRule#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#delete DatabaseAccessRule#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#create DatabaseAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/oraclepaas/1.5.3/docs/resources/database_access_rule#delete DatabaseAccessRule#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAccessRuleTimeoutsOutputReference <a name="DatabaseAccessRuleTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseAccessRule } from '@cdktf/provider-oraclepaas'

new databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAccessRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-oraclepaas.databaseAccessRule.DatabaseAccessRuleTimeouts">DatabaseAccessRuleTimeouts</a>

---



