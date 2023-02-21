# `mysqlAccessRule` Submodule <a name="`mysqlAccessRule` Submodule" id="@cdktf/provider-oraclepaas.mysqlAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlAccessRule <a name="MysqlAccessRule" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule oraclepaas_mysql_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer"></a>

```typescript
import { mysqlAccessRule } from '@cdktf/provider-oraclepaas'

new mysqlAccessRule.MysqlAccessRule(scope: Construct, id: string, config: MysqlAccessRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig">MysqlAccessRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig">MysqlAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts"></a>

```typescript
public putTimeouts(value: MysqlAccessRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct"></a>

```typescript
import { mysqlAccessRule } from '@cdktf/provider-oraclepaas'

mysqlAccessRule.MysqlAccessRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement"></a>

```typescript
import { mysqlAccessRule } from '@cdktf/provider-oraclepaas'

mysqlAccessRule.MysqlAccessRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource"></a>

```typescript
import { mysqlAccessRule } from '@cdktf/provider-oraclepaas'

mysqlAccessRule.MysqlAccessRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference">MysqlAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.portsInput">portsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceIdInput">serviceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.ports">ports</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceId">serviceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlAccessRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference">MysqlAccessRuleTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.portsInput"></a>

```typescript
public readonly portsInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `serviceInstanceIdInput`<sup>Optional</sup> <a name="serviceInstanceIdInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceIdInput"></a>

```typescript
public readonly serviceInstanceIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MysqlAccessRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.ports"></a>

```typescript
public readonly ports: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.serviceInstanceId"></a>

```typescript
public readonly serviceInstanceId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlAccessRuleConfig <a name="MysqlAccessRuleConfig" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.Initializer"></a>

```typescript
import { mysqlAccessRule } from '@cdktf/provider-oraclepaas'

const mysqlAccessRuleConfig: mysqlAccessRule.MysqlAccessRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#destination MysqlAccessRule#destination}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#name MysqlAccessRule#name}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.ports">ports</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#ports MysqlAccessRule#ports}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.serviceInstanceId">serviceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#service_instance_id MysqlAccessRule#service_instance_id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#source MysqlAccessRule#source}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#description MysqlAccessRule#description}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#enabled MysqlAccessRule#enabled}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#id MysqlAccessRule#id}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#protocol MysqlAccessRule#protocol}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#destination MysqlAccessRule#destination}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#name MysqlAccessRule#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.ports"></a>

```typescript
public readonly ports: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#ports MysqlAccessRule#ports}.

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.serviceInstanceId"></a>

```typescript
public readonly serviceInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#service_instance_id MysqlAccessRule#service_instance_id}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#source MysqlAccessRule#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#description MysqlAccessRule#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#enabled MysqlAccessRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#id MysqlAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#protocol MysqlAccessRule#protocol}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MysqlAccessRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#timeouts MysqlAccessRule#timeouts}

---

### MysqlAccessRuleTimeouts <a name="MysqlAccessRuleTimeouts" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.Initializer"></a>

```typescript
import { mysqlAccessRule } from '@cdktf/provider-oraclepaas'

const mysqlAccessRuleTimeouts: mysqlAccessRule.MysqlAccessRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#create MysqlAccessRule#create}. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#delete MysqlAccessRule#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#create MysqlAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/r/mysql_access_rule#delete MysqlAccessRule#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlAccessRuleTimeoutsOutputReference <a name="MysqlAccessRuleTimeoutsOutputReference" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { mysqlAccessRule } from '@cdktf/provider-oraclepaas'

new mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MysqlAccessRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-oraclepaas.mysqlAccessRule.MysqlAccessRuleTimeouts">MysqlAccessRuleTimeouts</a> | cdktf.IResolvable

---



