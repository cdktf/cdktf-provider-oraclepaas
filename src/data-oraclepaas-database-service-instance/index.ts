// https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOraclepaasDatabaseServiceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance#id DataOraclepaasDatabaseServiceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance#name DataOraclepaasDatabaseServiceInstance#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance oraclepaas_database_service_instance}
*/
export class DataOraclepaasDatabaseServiceInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oraclepaas_database_service_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/oraclepaas/d/database_service_instance oraclepaas_database_service_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOraclepaasDatabaseServiceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOraclepaasDatabaseServiceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oraclepaas_database_service_instance',
      terraformGeneratorMetadata: {
        providerName: 'oraclepaas',
        providerVersion: '1.5.3',
        providerVersionConstraint: '~> 1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apex_url - computed: true, optional: false, required: false
  public get apexUrl() {
    return this.getStringAttribute('apex_url');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_destination - computed: true, optional: false, required: false
  public get backupDestination() {
    return this.getStringAttribute('backup_destination');
  }

  // bring_your_own_license - computed: true, optional: false, required: false
  public get bringYourOwnLicense() {
    return this.getBooleanAttribute('bring_your_own_license');
  }

  // character_set - computed: true, optional: false, required: false
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // cloud_storage_container - computed: true, optional: false, required: false
  public get cloudStorageContainer() {
    return this.getStringAttribute('cloud_storage_container');
  }

  // compute_site_name - computed: true, optional: false, required: false
  public get computeSiteName() {
    return this.getStringAttribute('compute_site_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // enterprise_manager_url - computed: true, optional: false, required: false
  public get enterpriseManagerUrl() {
    return this.getStringAttribute('enterprise_manager_url');
  }

  // failover_database - computed: true, optional: false, required: false
  public get failoverDatabase() {
    return this.getBooleanAttribute('failover_database');
  }

  // glassfish_url - computed: true, optional: false, required: false
  public get glassfishUrl() {
    return this.getStringAttribute('glassfish_url');
  }

  // high_performance_storage - computed: true, optional: false, required: false
  public get highPerformanceStorage() {
    return this.getBooleanAttribute('high_performance_storage');
  }

  // hybrid_disaster_recovery_ip - computed: true, optional: false, required: false
  public get hybridDisasterRecoveryIp() {
    return this.getStringAttribute('hybrid_disaster_recovery_ip');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_domain - computed: true, optional: false, required: false
  public get identityDomain() {
    return this.getStringAttribute('identity_domain');
  }

  // ip_network - computed: true, optional: false, required: false
  public get ipNetwork() {
    return this.getStringAttribute('ip_network');
  }

  // ip_reservations - computed: true, optional: false, required: false
  public get ipReservations() {
    return this.getStringAttribute('ip_reservations');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }

  // monitor_url - computed: true, optional: false, required: false
  public get monitorUrl() {
    return this.getStringAttribute('monitor_url');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // national_character_set - computed: true, optional: false, required: false
  public get nationalCharacterSet() {
    return this.getStringAttribute('national_character_set');
  }

  // pluggable_database_name - computed: true, optional: false, required: false
  public get pluggableDatabaseName() {
    return this.getStringAttribute('pluggable_database_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
