import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class LocationCard extends Component {
  render() {
    const location = this.props.location;
    return (
      <div className="location-card">
        <img className="location-img" src={this.props.avatar} alt="" />
        <h5>City: {location.city}</h5>
        <p>Country: {location.country}</p>
        <p>
          Coordinates: {location.longitude}
          {location.latitude}
        </p>
        <Link to={`/locations/${this.props.location.id}`}>
          Go to my show page
        </Link>
      </div>
    );
  }
}

LocationCard.defaultProps = {
  avatar:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///9BQkf29vZBQUj///0/QET7+/v5+flCQ0dBQUfz8/NXWFzw8PBNTlJVVlpGR0vi4uIxMjfo6OhQUVU3OD0tLjPl5eXc3NwnKS8sLS9BQkQzNDe9vb3Fxsg9O0Gur7FkZWmMjI6kpaeNjJDExchzc3OVlZjPz9CdnZ1eX2OFhIfV1dVxcXImJi6oqao0NDUIAxJdjoLzAAAHo0lEQVR4nO2cC3eqvBKGQUi4CRQBi1oRe7Oo7T7//9edSWKtAQR1768Q1zxdWpDgmtdJJhcGNA1BEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBkIFCO/bvgMnyeVt4vu97xfZ5OenbnH8MXa71LEoSIkiSKNPXy/tx48NLHuVGFfjs5aFv0/4Jj/vP3AEqAtlH+ef+sW/z/prJ24zo5yGzt4lmmn1b+ResImh2bQpJEq36NvJmqOYWUYu6b9LC7dvUW3l0RHxpUSdijqNeazRNk2qvaVv9lOpq+qpRU6nmyIx9zS7Ux8heNeUCzuvnFQKFRLV4TNuaXx0jVawtjqE/r8uwv6kfchwy7tvoqyhIk4wWhbZNir6NvoavqFVhQ4yFD6Ovvs2+nMlMb3QUSRZRFC2SRoW2PlNnSvWWNFRFkmTxerVcLlfvQVYTyU5I3vo2/DKotsnkOMrHNZH/9RNKxl9+pNeGO062U2LqT7Uir/UUZFEdX68Wtbpq5IUSCrXHzJB7CpskbHBdGbK4RULkmmwYmRqd4pZUat98seZD1R+JYme7mFcUkm2Pdl+MK0URFnH+HARWFWrrP5WYSxIVJlJP0YnVPETuz5bdQ0WVCkdPv2jprfCu4sRokozOlh1VFSrRYUTXuKXqcJL+mp0385DaktEkbi0eE1lhNuwFRhY+nqSlGcdJ2heanhbyJIR5fMBTYWbaeyIrnJ1vhQxrJitM3geu0NT20lDFyc8HUsE+lxSS/cAValopK0w+Os75SCSFTjl4haGssLODe4pkH4aDVghQeUjqRJuOEzZR5Yyhj72tXLY33XWcsEtlhbn1K3beTtWHaZcPd5WF/8H7sNYOlx3ll7JC1g4HTiWWdi4vfSWywvJXrPwb3qSG6ORdQ2m5vN5Zvn8+ZJ84i9Z2ZdJKKO3sP/unOi5dtDfEJ9/zT+u1AhPEh8zWT6btTvtSNt36fglNV5wB04yBzy04kTx70tv6C7qLyoJ50RaFbRL9nqE381aZAbfFf+qBuiIsvxUSMuRAQw+DkVVSXac5v4C2jr2wjGPv6MOO2WSv0NFISJxmp+tnTOKfc33i15/CDsIyiI8Ks+nvWXwt1B0d5roB2GufQrK6Zyx3pK0yEhdlEftElHMMEvyy1ZdD6UEh9H4fC5a7JrQd/qdrTTtNR6QaeHydssMhexPpbo4x3N5wBDCFFN7Nh5nneeBIm/geiyRgP3QJOw2OcY3UdaFCb0qflSKsJGHlAnh9PjDvHmvDcOACmV3szWIXgOehB7oCEpLA5xsk2i8tjbdUCzz4us9JaNseCX0o6LFfw7YNvxTfNRqaRAsssiwmDv5GJn32g4KUYDjxIEx6fCPwc99frzbTycNmtfbTMPTiOA65wjD2g9KGF0RS/hWDU8gE8kgDxkE9tKYOSALjQR6o88GPMVTE0CdBTtI0CsME3MqdLBSybTsOYGQzhYg8GsP3DGySOGLCmEIhdWS9Baz5hTFrYoEf2kHAFMZcJWF7tlDliVoah8yPUJO3mmWxBu0OTCCrpS6vqVwqCN4kPELGfkyYwqMP2YsJZwp9z/Z9SaEdbSxQaLljVkdHg/KjEOhqB4UWLePAA5fZvhdWFPrscxZnS9BuB5IPfXC/CT+Uy75qPB5SW2Stx4UQaYkIMaKrOdRCHQKNH3vQIj22HYR8PwbVbAATenCM/QN18DI8b/FFWW3ndWFoCllF5R3BYeBmufPQN9iiC8z9QI/NNMErBF+GIdHFpJdtQRHxMpxwIX4gemjNg6qldd4TvSGvjdTyiI67Rvfq+LAYp06DwjMZX0JhqlZem7ZOzihsFqgbybpvk69knDbkJragnAs1bZt3yzohVyLPRGKSXqUwVSdr78hL0q3rSPLSt7k34M7meuudCN9AoflMhUyhGu+LixUu3vs29iZcUk1wO6eQECVdyHKhL1SoUv6zTNiUsF/DcYZ/zfAcrxf1GN3ZDAOmvMiHw78oep7HS+59UiQx+Azb7m6/5bKGCrgLu2mieMTQ7YWiPcU3q6hDocI3yR4ImqbCPwoHfC3mUnZZq8KsK2dKAc4Gm46rp+owmjffDsyvvs2HtWR4I0/NIxt+XVHh0cwPVNs3LmiIOzGGvSh6GVSbND53gKWWTO5CocY6RaM+QHUM9bvCH8r6/Xq6kas84pYxtWlTsEmn1Rv2lMU0YbpfEwgT+2GnrF+BuEnh9J5Yw3BIqan1JIwuJpEuKVRyCbidVXoyyTCc9I7i6Df70/FpUvRtzj/HNMcnj6sh6fiu2uCBp9kxl292F+PROtvkIPAu5kxNUP07Y/FORqN1dqnIxbyDef05niPHcaLnvs34Lyly9vCL+8XUxkmeKJeScAXQB27+t7mfAXcd9py6DXv2XN+GIFdAKbWoJRKb3VNEui0cgxJ9G3kboIyrGo/HE2A6fWA8Cvj2dAqfw+ExV2upJZRyfa6QN+XKdrvdZrNZCmAL9rnSKVfJc/zV8iblVZNrHB88yL2323Fpwo/fXlRQ3wHKfMkboSu0SojGCMepkuIQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGQwfJ/kE900go13DUAAAAASUVORK5CYII=",
};
