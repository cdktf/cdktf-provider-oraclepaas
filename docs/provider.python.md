# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-oraclepaas.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OraclepaasProvider <a name="OraclepaasProvider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/oraclepaas oraclepaas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import provider

provider.OraclepaasProvider(
  scope: Construct,
  id: str,
  identity_domain: str,
  password: str,
  user: str,
  alias: str = None,
  application_endpoint: str = None,
  database_endpoint: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  java_endpoint: str = None,
  max_retries: typing.Union[int, float] = None,
  mysql_endpoint: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.identityDomain">identity_domain</a></code> | <code>str</code> | The OPAAS identity domain for API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | The user password for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.user">user</a></code> | <code>str</code> | The user name for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.applicationEndpoint">application_endpoint</a></code> | <code>str</code> | The HTTP endpoint for the Oracle Application operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.databaseEndpoint">database_endpoint</a></code> | <code>str</code> | The HTTP endpoint for Oracle Database operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.javaEndpoint">java_endpoint</a></code> | <code>str</code> | The HTTP endpoint for Oracle Java operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1). |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.mysqlEndpoint">mysql_endpoint</a></code> | <code>str</code> | The HTTP endpoint for Oracle MySQL operations. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `identity_domain`<sup>Required</sup> <a name="identity_domain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.identityDomain"></a>

- *Type:* str

The OPAAS identity domain for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#identity_domain OraclepaasProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.password"></a>

- *Type:* str

The user password for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#password OraclepaasProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.user"></a>

- *Type:* str

The user name for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#user OraclepaasProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#alias OraclepaasProvider#alias}

---

##### `application_endpoint`<sup>Optional</sup> <a name="application_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.applicationEndpoint"></a>

- *Type:* str

The HTTP endpoint for the Oracle Application operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#application_endpoint OraclepaasProvider#application_endpoint}

---

##### `database_endpoint`<sup>Optional</sup> <a name="database_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.databaseEndpoint"></a>

- *Type:* str

The HTTP endpoint for Oracle Database operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#database_endpoint OraclepaasProvider#database_endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#insecure OraclepaasProvider#insecure}

---

##### `java_endpoint`<sup>Optional</sup> <a name="java_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.javaEndpoint"></a>

- *Type:* str

The HTTP endpoint for Oracle Java operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#java_endpoint OraclepaasProvider#java_endpoint}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#max_retries OraclepaasProvider#max_retries}

---

##### `mysql_endpoint`<sup>Optional</sup> <a name="mysql_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.Initializer.parameter.mysqlEndpoint"></a>

- *Type:* str

The HTTP endpoint for Oracle MySQL operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#mysql_endpoint OraclepaasProvider#mysql_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetApplicationEndpoint">reset_application_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetDatabaseEndpoint">reset_database_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetJavaEndpoint">reset_java_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMysqlEndpoint">reset_mysql_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_application_endpoint` <a name="reset_application_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetApplicationEndpoint"></a>

```python
def reset_application_endpoint() -> None
```

##### `reset_database_endpoint` <a name="reset_database_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetDatabaseEndpoint"></a>

```python
def reset_database_endpoint() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_java_endpoint` <a name="reset_java_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetJavaEndpoint"></a>

```python
def reset_java_endpoint() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_mysql_endpoint` <a name="reset_mysql_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.resetMysqlEndpoint"></a>

```python
def reset_mysql_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_oraclepaas import provider

provider.OraclepaasProvider.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_oraclepaas import provider

provider.OraclepaasProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_oraclepaas import provider

provider.OraclepaasProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput">application_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput">database_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput">identity_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput">java_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput">mysql_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint">application_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint">database_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain">identity_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint">java_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint">mysql_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user">user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `application_endpoint_input`<sup>Optional</sup> <a name="application_endpoint_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpointInput"></a>

```python
application_endpoint_input: str
```

- *Type:* str

---

##### `database_endpoint_input`<sup>Optional</sup> <a name="database_endpoint_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpointInput"></a>

```python
database_endpoint_input: str
```

- *Type:* str

---

##### `identity_domain_input`<sup>Optional</sup> <a name="identity_domain_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomainInput"></a>

```python
identity_domain_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `java_endpoint_input`<sup>Optional</sup> <a name="java_endpoint_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpointInput"></a>

```python
java_endpoint_input: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_endpoint_input`<sup>Optional</sup> <a name="mysql_endpoint_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpointInput"></a>

```python
mysql_endpoint_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `application_endpoint`<sup>Optional</sup> <a name="application_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.applicationEndpoint"></a>

```python
application_endpoint: str
```

- *Type:* str

---

##### `database_endpoint`<sup>Optional</sup> <a name="database_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.databaseEndpoint"></a>

```python
database_endpoint: str
```

- *Type:* str

---

##### `identity_domain`<sup>Optional</sup> <a name="identity_domain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.identityDomain"></a>

```python
identity_domain: str
```

- *Type:* str

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `java_endpoint`<sup>Optional</sup> <a name="java_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.javaEndpoint"></a>

```python
java_endpoint: str
```

- *Type:* str

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_endpoint`<sup>Optional</sup> <a name="mysql_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.mysqlEndpoint"></a>

```python
mysql_endpoint: str
```

- *Type:* str

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.user"></a>

```python
user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-oraclepaas.provider.OraclepaasProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OraclepaasProviderConfig <a name="OraclepaasProviderConfig" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_oraclepaas import provider

provider.OraclepaasProviderConfig(
  identity_domain: str,
  password: str,
  user: str,
  alias: str = None,
  application_endpoint: str = None,
  database_endpoint: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  java_endpoint: str = None,
  max_retries: typing.Union[int, float] = None,
  mysql_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain">identity_domain</a></code> | <code>str</code> | The OPAAS identity domain for API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password">password</a></code> | <code>str</code> | The user password for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user">user</a></code> | <code>str</code> | The user name for OPAAS API operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint">application_endpoint</a></code> | <code>str</code> | The HTTP endpoint for the Oracle Application operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint">database_endpoint</a></code> | <code>str</code> | The HTTP endpoint for Oracle Database operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint">java_endpoint</a></code> | <code>str</code> | The HTTP endpoint for Oracle Java operations. |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1). |
| <code><a href="#@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint">mysql_endpoint</a></code> | <code>str</code> | The HTTP endpoint for Oracle MySQL operations. |

---

##### `identity_domain`<sup>Required</sup> <a name="identity_domain" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.identityDomain"></a>

```python
identity_domain: str
```

- *Type:* str

The OPAAS identity domain for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#identity_domain OraclepaasProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The user password for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#password OraclepaasProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.user"></a>

```python
user: str
```

- *Type:* str

The user name for OPAAS API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#user OraclepaasProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#alias OraclepaasProvider#alias}

---

##### `application_endpoint`<sup>Optional</sup> <a name="application_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.applicationEndpoint"></a>

```python
application_endpoint: str
```

- *Type:* str

The HTTP endpoint for the Oracle Application operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#application_endpoint OraclepaasProvider#application_endpoint}

---

##### `database_endpoint`<sup>Optional</sup> <a name="database_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.databaseEndpoint"></a>

```python
database_endpoint: str
```

- *Type:* str

The HTTP endpoint for Oracle Database operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#database_endpoint OraclepaasProvider#database_endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#insecure OraclepaasProvider#insecure}

---

##### `java_endpoint`<sup>Optional</sup> <a name="java_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.javaEndpoint"></a>

```python
java_endpoint: str
```

- *Type:* str

The HTTP endpoint for Oracle Java operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#java_endpoint OraclepaasProvider#java_endpoint}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number retries to wait for a successful response when operating on resources within OPAAS (defaults to 1).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#max_retries OraclepaasProvider#max_retries}

---

##### `mysql_endpoint`<sup>Optional</sup> <a name="mysql_endpoint" id="@cdktf/provider-oraclepaas.provider.OraclepaasProviderConfig.property.mysqlEndpoint"></a>

```python
mysql_endpoint: str
```

- *Type:* str

The HTTP endpoint for Oracle MySQL operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas#mysql_endpoint OraclepaasProvider#mysql_endpoint}

---


